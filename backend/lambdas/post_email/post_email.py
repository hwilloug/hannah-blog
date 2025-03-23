from os import environ
from psycopg2 import connect, DatabaseError
from psycopg2.extras import RealDictCursor
from psycopg2.errors import IntegrityError
from sys import exit
from json import dumps, loads
from base64 import b64decode
from jinja2 import Template
from boto3 import client

username = environ.get("POSTGRES_USERNAME")
password = environ.get("POSTGRES_PASSWORD")
host = environ.get("POSTGRES_HOST")
port = environ.get("POSTGRES_PORT")
db_name = environ.get("POSTGRES_DB_NAME")

client = client("ses", region_name="us-east-1")


def lambda_handler(event, context):
    try:
        conn = connect(host=host, database=db_name, user=username, password=password, port=port)
    except DatabaseError as e:
        print("Could not connect to db", e)
        exit(1)

    table_name = environ.get("TABLE_NAME")
    body = loads(event.get("body", {}))
    email = body.get("email")

    if email is None: 
        return {
            "statusCode": 400,
            "body": "'email' required in body",
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }

    cursor = conn.cursor(cursor_factory=RealDictCursor)

    sql = "INSERT INTO newsletter VALUES (%s)"
    try:
      cursor.execute(sql, (email,))
      conn.commit()
    except IntegrityError as e:
        print("Email already exists", e)
        return {
                "statusCode": 409,
                "body": dumps(f"Email already exists: {e}"),
                'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }

    sql = "SELECT * FROM articles ORDER BY likes DESC LIMIT 3"
    try:
        cursor.execute(sql)
        articles = cursor.fetchall()
    except DatabaseError as e:
        print("Error fetching articles", e)
        return {
            "statusCode": 500,
            "body": dumps({"error": str(e)}),
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }

    try:
        with open("new_subscriber_email.html") as HTMLFile:
            email_html = Template(HTMLFile.read()).render(
                articles = articles
            )

        client.send_email(
            Destination={
                "ToAddresses": [email]
            },
            Message={
                "Body": {
                    "Html": {
                        "Charset": "UTF-8",
                        "Data": email_html
                    }
                },
                "Subject": {
                    "Charset": "UTF-8",
                    "Data": "Welcome to Hannah's Hobby Room Newsletter"
                }
            },
            Source="Hannah @ Hannah's Hobby Room <hannah@hannahshobbyroom.com>",
            ReplyToAddresses=["support@hannahshobbyroom.com"]
        )
    except Exception as e:
        print("Error rendering email template", e)
        return {
            "statusCode": 500,
            "body": dumps({"error": str(e)}),
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }

    return {
        "statusCode": 201,
        "body": dumps({"email": email}),
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }