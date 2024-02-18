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

    table_name = environ.get("TABLE_NAME")
    query_params = event.get("queryStringParameters", {})
    if query_params is None:
        query_params = {}
    category = query_params.get("category")
    subcategory = query_params.get("subcategory")
    slug = query_params.get("slug")
    limit = query_params.get("limit", 5)
    page = query_params.get("page", 1)
    offset = (int(page) - 1) * int(limit)

    sql = f"SELECT * FROM {table_name}"
    tup = ()
    if category and subcategory and slug:
        sql = sql + " WHERE category = %s AND %s = ANY(subcategory) AND slug = %s"
        tup = (category, subcategory, slug)
    elif category and subcategory and slug is None:
        sql = sql + " WHERE category = %s AND %s = ANY(subcategory)"
        tup = (category, subcategory)
    elif category and subcategory is None and slug is None:
        sql = sql + " WHERE category = %s"
        tup = (category,)
    elif category and subcategory is None and slug:
        sql = sql + " WHERE category = %s AND slug = %s"
        tup = (category, slug)
    elif category is None and subcategory and slug:
        sql = sql + " WHERE %s = ANY(subcategory) AND slug = %s"
        tup = (subcategory, slug)
    elif category is None and subcategory and slug is None:
        sql = sql + " WHERE %s = ANY(subcategory)"
        tup = (subcategory,)
    elif category is None and subcategory is None and slug:
        sql = sql + " WHERE slug = %s"
        tup = (slug,)

    sql = sql + " ORDER BY updated_at DESC LIMIT %s OFFSET %s"
    tup = tup + (limit, offset)

    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        cursor.execute(sql, tup)
        results = cursor.fetchall()

    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        cursor.execute("SELECT COUNT(*) FROM articles")
        count = cursor.fetchone()

    return {
        "statusCode": 200,
        "body": dumps({"articles": results, "count": count.get("count")}, default=str),
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }