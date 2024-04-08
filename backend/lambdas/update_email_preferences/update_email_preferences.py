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

def lambda_handler(event, context):
    try:
        conn = connect(host=host, database=db_name, user=username, password=password, port=port)
    except DatabaseError as e:
        print("Could not connect to db", e)
        exit(1)

    path_params = event.get("pathParameters", {})
    email = path_params.get("email")
    body = loads(event.get("body", {}))
    food = body.get("food")
    gardening = body.get("gardening")
    crafts = body.get("crafts")
    coding = body.get("coding")
    books = body.get("books")
    antiquing = body.get("antiquing")

    if email is None: 
        return {
            "statusCode": 400,
            "body": "'email' required in path",
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }
    
    sql = "UPDATE newsletter SET food = %s, gardening = %s, crafts = %s, coding = %s, books = %s, antiquing = %s WHERE email = %s"

    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        try:
            cursor.execute(sql, (food, gardening, crafts, coding, books, antiquing, email))
            conn.commit()
        except Exception as e:
            return {
                "statusCode": 500,
                "body": dumps({"error": e}),
                'headers' : {
                    'Access-Control-Allow-Origin' : '*'
                }
            }


    return {
        "statusCode": 204,
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }