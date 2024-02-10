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
    email = event.get("queryStringParameters", {}).get("email")

    if email is None: 
        return {
            "statusCode": 400,
            "body": "'email' required in path",
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }

    cursor = conn.cursor(cursor_factory=RealDictCursor)

    sql = "DELETE FROM newsletter WHERE email = %s"
    cursor.execute(sql, (email,))
    conn.commit()

    return {
        "statusCode": 200,
        "body": dumps({"message": "successufully unsubscribed"}),
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }