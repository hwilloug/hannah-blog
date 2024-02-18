from os import environ
from psycopg2 import connect, DatabaseError
from psycopg2.extras import RealDictCursor, register_uuid
from psycopg2.errors import IntegrityError
from sys import exit
from json import dumps, loads
from uuid import uuid4

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

    body = loads(event.get("body", {}))
    comment = body.get("comment_body")
    article_slug = body.get("article_slug")
    user_id = body.get("user_id")
    comment_id = uuid4()
    register_uuid()

    if comment is None: 
        return {
            "statusCode": 400,
            "body": "'comment_body' required in body",
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }
    if article_slug is None: 
      return {
          "statusCode": 400,
          "body": "'article_slug' required in body",
          'headers' : {
              'Access-Control-Allow-Origin' : '*'
          }
      }
    if user_id is None: 
      return {
          "statusCode": 400,
          "body": "'user_id' required in body",
          'headers' : {
              'Access-Control-Allow-Origin' : '*'
          }
      }

    cursor = conn.cursor(cursor_factory=RealDictCursor)

    sql = "INSERT INTO comments (id, body, user_id, article_slug) VALUES (%s, %s, %s, %s)"
    try:
      cursor.execute(sql, (comment_id, comment, user_id, article_slug))
      conn.commit()
    except IntegrityError as e:
        print("Error inserting comment", e)
        return {
                "statusCode": 500,
                "body": dumps(f"Error inserting comment: {e}"),
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