from os import environ
from psycopg2 import connect, DatabaseError
from psycopg2.extras import RealDictCursor
from psycopg2.errors import IntegrityError
from sys import exit
from json import dumps, loads
from base64 import b64decode

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
    body = event.get("body", {})
    decoded_body = loads(b64decode(body).decode('utf-8'))
    email = decoded_body.get("email")

    if email is None: 
        return {
            "statusCode": 400,
            "body": "'email' required in body",
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }

    cursor = conn.cursor(cursor_factory=RealDictCursor)

    sql = f"INSERT INTO {table_name} VALUES (%s)"
    try:
      cursor.execute(sql, (email,))
      conn.commit()
    except IntegrityError as e:
        print("Email already exists", e)
        return {
                "statusCode": 409,
                "body": dumps(f"Email already exists: {e}"),
                'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }

    return {
        "statusCode": 201,
        "body": dumps({"email": email}),
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }