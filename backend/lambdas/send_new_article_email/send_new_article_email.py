from json import dumps
from boto3 import client
from os import environ
from psycopg2 import connect, DatabaseError
from psycopg2.extras import RealDictCursor
from jinja2 import Template

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

client = client("ses", region_name="us-east-1")

def lambda_handler(event, context):
    table_name = environ.get("TABLE_NAME")

    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        sql = f"SELECT * FROM {table_name}"
        cursor.execute(sql)
        newsletter_results = cursor.fetchall()

    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        slug = event.get("slug")
        sql = "SELECT img, img_alt, title, subtitle FROM articles WHERE slug = %s;"
        cursor.execute(sql, (slug, ))
        article_result = cursor.fetchone()

    if (article_result is None):
        return {
            "statusCode": 404,
            "body": f"Could not find article with slug: {slug}"
        }

    message_ids: list[str] = []
    for result in newsletter_results:
        if result.get(article_result.get("category").lower()) is False:
            continue

        try:
            with open("new_article.html") as HTMLFile:
                email_html = Template(HTMLFile.read()).render(
                    img = article_result.get("img"),
                    img_alt = article_result.get("img_alt"),
                    title = article_result.get("title"),
                    subtitle = article_result.get("subtitle"),
                    slug = slug,
                    email = result.get("email")
                )

            response = client.send_email(
                Destination={
                    "ToAddresses": [result.get("email")]
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
                        "Data": "🌸 New Article Alert 🌸"
                    }
                },
                Source="Hannah @ Hannah's Hobby Room <hannah@hannahshobbyroom.com>",
                ReplyToAddresses=["support@hannahshobbyroom.com"]
            )

            message_ids.append(response.get("MessageId"))
        except Exception as e:
            print(f"Could not send email to {result.get('email')}: {e}")
        
    return {
        "statusCode": 200,
        "body": dumps(f"Emails sent successfully: {message_ids}")
    }