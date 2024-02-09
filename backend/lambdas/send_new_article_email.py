from json import dumps
from boto3 import client
from os import environ
from psycopg2 import connect, DatabaseError
from psycopg2.extras import RealDictCursor

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
        sql = f"SELECT email FROM {table_name}"
        cursor.execute(sql)
        emails = cursor.fetchall()

    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        slug = event.get("slug")
        sql = f"SELECT img, img_alt, title, subtitle FROM articles WHERE slug = '{slug}';"
        cursor.execute(sql)
        article_result = cursor.fetchone()

    if (article_result is None):
        return {
            "statusCode": 400,
            "body": f"Could not find article with slug: {slug}"
        }

    message_ids: list[str] = []
    for email in emails:
        response = client.send_email(
            Destination={
                "ToAddresses": [email.get("email")]
            },
            Message={
                "Body": {
                    "Html": {
                        "Charset": "UTF-8",
                        "Data": f"""
                        <div style="background-color: #DECFD3; width: 100%; height: 100%; padding: 20px; margin: 0;">
                            <div style="background-color: white; border: 1px solid black; border-radius: 5px; padding: 20px; display: flex; flex-direction: row; align-items: center;">
                                <img src="https://hannahshobbyroom.com/poppy.png" />
                                <h1>There's a new article at <a href="https://hannahshobbyroom.com">Hannah's Hobby Room</a>!</h1>
                            </div>
                            <a href="https://hannahshobbyroom.com/articles/{slug}" style="color: black; text-decoration: none;">
                                <div style="background-color: white; border: 1px solid black; border-radius: 5px 20px; padding: 20px; margin: 50px;">
                                    <div style="display: flex; flex-direction: row; gap: 20px;">
                                        <img src="https://blog-images.poppyland.dev/{article_result.get("img")}" alt="{article_result.get("img_alt")}" style="height: 200px;" />
                                        <div>
                                            <h2>{article_result.get("title")}</h2>
                                            <h3>{article_result.get("subtitle")}</h3>
                                            <p><a href="https://hannahshobbyroom.com/articles/{slug}">https://hannahshobbyroom.com/articles/{slug}</a></p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div style="background-color: white; border: 1px solid black; border-radius: 5px; padding: 20px;">
                                <h2>See you soon,</h2>
                                <img src="https://hannahshobbyroom.com/signature.png" alt="Hannah" style="height: 50px;" />
                            </div>
                            </div>
                        </div>
                        """
                    }
                },
                "Subject": {
                    "Charset": "UTF-8",
                    "Data": "🌸 New Article Alert 🌸"
                }
            },
            Source="hannah@hannahshobbyroom.com",
            ReplyToAddresses=["support@hannahshobbyroom.com"]
        )

        message_ids.append(response.get("MessageId"))

    return {
        "statusCode": 200,
        "body": dumps(f"Emails sent successfully: {message_ids}")
    }