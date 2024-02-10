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
    slug = path_params.get('slug')

    cursor = conn.cursor(cursor_factory=RealDictCursor)

    sql = "SELECT * FROM articles WHERE SLUG = %s"
    cursor.execute(sql, (slug,))

    results = cursor.fetchall()
    
    if len(results) == 0:
        return {
            "statusCode": 404,
            "body": "Not found",
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }

    return {
        "statusCode": 200,
        "body": dumps(results[0], default=str),
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }