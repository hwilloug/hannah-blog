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
    featured = query_params.get("featured")
    limit = query_params.get("limit", 5)
    page = query_params.get("page", 1)
    offset = (int(page) - 1) * int(limit)
    sql = f"""
        SELECT a.*, COUNT(c.id) as comment_count 
        FROM {table_name} a
        LEFT JOIN comments c ON c.article_slug = a.slug
    """
    count_sql = f"""
        SELECT COUNT(*) as count
        FROM {table_name}
    """
    tup = ()
    query = []
    count_query = []
    if category is not None:
        query.append("a.category = %s")
        count_query.append("category = %s")
        tup = tup + (category,)
    if subcategory is not None:
        query.append("%s = ANY(a.subcategory)")
        count_query.append("subcategory = ANY(%s)")
        tup = tup + (subcategory,)
    if slug is not None:
        query.append("a.slug = %s")
        count_query.append("slug = %s")
        tup = tup + (slug,)
    if featured is not None:
        query.append("a.featured = %s")
        count_query.append("featured = %s")
        tup = tup + (featured,)
    
    if len(query):
        sql = sql + " WHERE " + " AND ".join(query)
        count_sql = count_sql + " WHERE " + " AND ".join(count_query)

    sql = sql + """ GROUP BY a.slug, a.title, a.subtitle, a.img, a.img_alt, a.category,
                    a.subcategory, a.created_at, a.updated_at, a.likes, a.featured"""

    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        cursor.execute(count_sql, tup)
        count_res = cursor.fetchone()
        count = count_res.get("count")

    sql = sql + " ORDER BY updated_at DESC LIMIT %s OFFSET %s"
    tup = tup + (limit, offset)

    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        cursor.execute(sql, tup)
        results = cursor.fetchall()

    return {
        "statusCode": 200,
        "body": dumps({"articles": results, "count": count}, default=str),
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }