from os import environ
from psycopg2 import connect, DatabaseError
from psycopg2.extras import RealDictCursor
from psycopg2.errors import IntegrityError
from sys import exit
from json import dumps, loads

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

    path_parameters = event.get("pathParameters", {})
    email = path_parameters.get("email")

    if email is None: 
        return {
            "statusCode": 400,
            "body": "'email' required in path",
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }

    sql = "SELECT * FROM newsletter WHERE email = %s"

    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        cursor.execute(sql, (email,))
        results = cursor.fetchone()

    if results is None:
        return {
            "statusCode": 404,
            "body": dumps({"message": f"Email not found: {email}"}),
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }
    
    result = {
        "food": results.get("food"),
        "gardening": results.get("gardening"),
        "crafts": results.get("crafts"),
        "coding": results.get("coding"),
        "books": results.get("books"),
        "antiquing": results.get("antiquing")
    }
    
    return {
        "statusCode": 200,
        "body": dumps(result),
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }