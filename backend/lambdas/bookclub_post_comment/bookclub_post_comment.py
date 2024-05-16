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
    username = body.get("username")
    parent_comment_id = body.get("parent_comment_id")
    comment_id = uuid4()
    register_uuid()

    if content is None: 
        return {
            "statusCode": 400,
            "body": "'content' required in body",
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
    if parent_comment_id:
      sql = "INSERT INTO bookclub.comments (comment_id, thread_id, username, content, parent_comment_id) VALUES (%s, %s, %s, %s, %s)"
       
    try:
      if parent_comment_id:
        cursor.execute(sql, (comment_id, thread_id, username, content, parent_comment_id))
      else:
        cursor.execute(sql, (comment_id, thread_id, username, content))
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