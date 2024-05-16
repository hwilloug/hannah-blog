from os import environ
from psycopg2 import connect, DatabaseError
from psycopg2.extras import RealDictCursor
from sys import exit
from json import dumps

username = environ.get("POSTGRES_USERNAME")
password = environ.get("POSTGRES_PASSWORD")
host = environ.get("POSTGRES_HOST")
port = environ.get("POSTGRES_PORT")
db_name = environ.get("POSTGRES_DB_NAME")

try:
    conn = connect(host=host, database=db_name, user=username, password=password, port=port)
except DatabaseError as e:
    print("Could not connect to db", e)
    exit(1)

def lambda_handler(event, context):
    table_name = environ.get("TABLE_NAME")
    path_params = event.get("pathParameters", {})
    thread_id = path_params.get('thread_id')

    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        sql = "SELECT * FROM bookclub.threads WHERE thread_id = %s"
        cursor.execute(sql, (thread_id,))
        results = cursor.fetchall()
    
    if len(results) == 0:
        return {
            "statusCode": 404,
            "body": "Not found",
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }
    
    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        sql = "SELECT * FROM bookclub.comments WHERE thread_id = %s"
        cursor.execute(sql, (thread_id,))
        comments = cursor.fetchall()

    result = {
        "thread": results[0],
        "comments": comments
    }

    return {
        "statusCode": 200,
        "body": dumps(result, default=str),
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }