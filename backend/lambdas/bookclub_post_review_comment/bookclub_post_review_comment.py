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
    thread_id = body.get("thread_id")
    book_id = body.get("book_id")
    username = body.get("username")
    rating = body.get("rating")
    comment_id = uuid4()
    review_id = uuid4()
    register_uuid()

    if rating is None: 
        return {
            "statusCode": 400,
            "body": "'rating' required in body",
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }
    if book_id is None: 
        return {
            "statusCode": 400,
            "body": "'book_id' required in body",
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }
    if thread_id is None: 
      return {
          "statusCode": 400,
          "body": "'thread_id' required in body",
          'headers' : {
              'Access-Control-Allow-Origin' : '*'
          }
      }
    if username is None: 
      return {
          "statusCode": 400,
          "body": "'username' required in body",
          'headers' : {
              'Access-Control-Allow-Origin' : '*'
          }
      }

    cursor = conn.cursor(cursor_factory=RealDictCursor)

    sql = "INSERT INTO bookclub.comments (comment_id, thread_id, username, content) VALUES (%s, %s, %s, %s)"
    sql2 = "INSERT INTO bookclub.reviews (review_id, book_id, comment_id, username, rating, content) VALUES (%s, %s, %s, %s, %s, %s)"
    try:
      cursor.execute(sql, (comment_id, thread_id, username, content))
      conn.commit()

      if content:
        cursor.execute(sql2, (review_id, book_id, comment_id, username, rating, content))
      else:
        cursor.execute(sql2, (review_id, book_id, comment_id, username, rating))
      conn.commit()
    except IntegrityError as e:
        print("Error inserting review", e)
        return {
                "statusCode": 500,
                "body": dumps(f"Error inserting review: {e}"),
                'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }

    return {
        "statusCode": 201,
        "body": dumps({"id": review_id}, default=str),
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }