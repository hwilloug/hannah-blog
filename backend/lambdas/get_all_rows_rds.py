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
    query_params = event.get("queryStringParameters", {})
    if query_params is None:
        query_params = {}
    query = query_params.get("category")

    cursor = conn.cursor(cursor_factory=RealDictCursor)

    sql = """SELECT * FROM articles"""
    if query:
        sql = f"{sql} WHERE category = '{query}'"
    cursor.execute(sql)

    results = cursor.fetchall()

    return {
        "statusCode": 200,
        "body": dumps(results, default=str),
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }