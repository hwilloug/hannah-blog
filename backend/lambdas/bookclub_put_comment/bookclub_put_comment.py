from os import environ
from psycopg2 import connect, DatabaseError
from psycopg2.extras import RealDictCursor, register_uuid
from psycopg2.errors import IntegrityError
from sys import exit
from json import dumps, loads
from uuid import uuid4

pg_username = environ.get("POSTGRES_USERNAME")
password = environ.get("POSTGRES_PASSWORD")
host = environ.get("POSTGRES_HOST")
port = environ.get("POSTGRES_PORT")
db_name = environ.get("POSTGRES_DB_NAME")

def lambda_handler(event, context):
    try:
        conn = connect(host=host, database=db_name, user=pg_username, password=password, port=port)
    except DatabaseError as e:
        print("Could not connect to db", e)
        exit(1)

    body = loads(event.get("body", {}))
    content = body.get("content")
    path_params = event.get("pathParameters", {})
    comment_id = path_params.get('comment_id')

    if content is None: 
        return {
            "statusCode": 400,
            "body": "'content' required in body",
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }

    cursor = conn.cursor(cursor_factory=RealDictCursor)

    sql = "UPDATE bookclub.comments SET (content = %s) WHERE comment_id = %s"
    
    try:
        cursor.execute(sql, (content, comment_id))
        conn.commit()
    except IntegrityError as e:
        print("Error updating comment", e)
        return {
                "statusCode": 500,
                "body": dumps(f"Error updating comment: {e}"),
                'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }

    return {
        "statusCode": 201,
        "body": dumps({"id": comment_id}, default=str),
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }