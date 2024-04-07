from os import environ
from psycopg2 import connect, DatabaseError
from psycopg2.extras import RealDictCursor
from sys import exit
from json import dumps, loads

username = environ.get("POSTGRES_USERNAME")
password = environ.get("POSTGRES_PASSWORD")
host = environ.get("POSTGRES_HOST")
port = environ.get("POSTGRES_PORT")
db_name = environ.get("POSTGRES_DB_NAME")

def lambda_handler(event, context):
    
    body = loads(event.get("body", {}))
    path_parmas = event.get("pathParameters", {})
    slug = path_parmas.get("slug")
    decrease = body.get("decrease", False)
    if slug is None:
        return {
            "statusCode": 400,
            "body": dumps({"message": "Slug is required in body"}),
            "headers": {
              'Access-Control-Allow-Origin' : '*'
            }
        }

    try:
        conn = connect(host=host, database=db_name, user=username, password=password, port=port)
    except DatabaseError as e:
        print("Could not connect to db", e)
        exit(1)

    sql = "SELECT likes FROM articles WHERE slug = %s"

    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        cursor.execute(sql, (slug,))
        results = cursor.fetchone()

    if results is None:
        return {
            "statusCode": 404,
            "body": dumps({"message": f"Could not find slug: {slug}"}),
            "headers": {
                'Access-Control-Allow-Origin' : '*'
            }
        }
    
    likes = results.get("likes")

    if decrease:
        new_likes = likes - 1
        if new_likes < 0:
            new_likes = 0
    else:
        new_likes = likes + 1

    update_sql = "UPDATE articles SET likes = %s WHERE slug = %s"

    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        cursor.execute(update_sql, (new_likes, slug))
        conn.commit()

    return {
        "statusCode": 200,
        "body": dumps({"likes": new_likes}, default=str),
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }