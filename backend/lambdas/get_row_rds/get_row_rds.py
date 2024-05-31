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
    path_params = event.get("pathParameters", {})
    slug = path_params.get('slug')

    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        sql = "SELECT * FROM articles WHERE slug = %s"
        cursor.execute(sql, (slug,))
        results = cursor.fetchall()
    
    if len(results) == 0:
        return {
            "statusCode": 404,
            "body": "Not found",
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }
    
    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        sql = """
            SELECT 
                id,
                timestamp,
                body,
                username,
                article_slug,
                parent_id
            FROM 
                comments
            WHERE 
                parent_id IS NULL
            AND article_slug = %s 
            ORDER BY 
                timestamp"""
        cursor.execute(sql, (slug,))
        parent_comments = cursor.fetchall()

    sorted_comments = []
    for comment in parent_comments:
        with conn.cursor(cursor_factory=RealDictCursor) as cursor:
            sql = """
                SELECT 
                    id,
                    timestamp,
                    body,
                    username,
                    article_slug,
                    parent_id
                FROM 
                    comments
                WHERE 
                    parent_id = %s
                ORDER BY 
                    timestamp"""
            cursor.execute(sql, (comment["id"],))
            child_comments = cursor.fetchall()
            sorted_comments.append({
                "id": comment["id"],
                "timestamp": comment["timestamp"],
                "body": comment["body"],
                "username": comment["username"],
                "article_slug": comment["article_slug"],
                "children": child_comments
            })

    result = {
        "article": results[0],
        "comments": sorted_comments
    }

    return {
        "statusCode": 200,
        "body": dumps(result, default=str),
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }