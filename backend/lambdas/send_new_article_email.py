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

    cursor = conn.cursor(cursor_factory=RealDictCursor)

    sql = f"SELECT email FROM {table_name}"
    cursor.execute(sql)

    results = cursor.fetchall()

    message_ids: list[str] = []
    for result in results:
        response = client.send_email(
            Destination={
                "ToAddresses": [result.get("email")]
            },
            Message={
                "Body": {
                    "Html": {
                        "Charset": "UTF-8",
                        "Data": """
                        <img src="https://hannahshobbyroom.com/poppy.png" />
                        <h1>There's a new article at <a href="https://hannahshobbyroom.com">Hannah's Hobby Room</a>!</h1>
                        <h2>Come check out what I've been up to :)</h2>
                        <h2>See you soon,</h2>
                        <img src="https://hannahshobbyroom.com/signature.png" />
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