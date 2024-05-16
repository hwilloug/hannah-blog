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

def lambda_handler(event, context):
    try:
        conn = connect(host=host, database=db_name, user=username, password=password, port=port)
    except DatabaseError as e:
        print("Could not connect to db", e)
        exit(1)

    sql = "SELECT * FROM bookclub.threads JOIN bookclub.books ON books.book_id = threads.book_id"

    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        cursor.execute(sql)
        results = cursor.fetchall()

    return {
        "statusCode": 200,
        "body": dumps({"threads": results}, default=str),
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }