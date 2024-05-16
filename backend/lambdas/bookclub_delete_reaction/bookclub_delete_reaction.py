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
    reaction_id = path_params.get('reaction_id')

    if reaction_id is None:
        return {
            "statusCode": 400,
            "body": "'comment_id' is required in the path",
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }

    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        sql = "DELETE FROM bookclub.reactions WHERE reaction_id = %s"
        cursor.execute(sql, (reaction_id,))
        conn.commit()

    return {
        "statusCode": 200,
        "body": dumps(f"Successfully deleted reaction {reaction_id}", default=str),
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }