from boto3 import client
from botocore.exceptions import ClientError
from os import environ
from json import dumps

def lambda_handler(event, context):
    table_name = environ.get("TABLE_NAME")
    partition_key = environ.get("PARTITION_KEY")
    path_params = event.get("pathParameters", {})
    value = path_params.get(partition_key.lower())

    dynamodb = client('dynamodb')

    table = dynamodb.Table(table_name)

    try:
        response = table.query(
            KeyConditionExpression=f"{partition_key} = :value",
            ExpressionAttributeValues={
                ":value": {"S": value}
            },
            Limit=1
        )
        items = response.get("Items", [])

        if items:
            return {
                "statusCode": 200,
                "body": dumps(items[0])
            }
        else:
            return {
                "statusCode": 404,
                "body": f"Item with {partition_key}: '{value}' not found"
            }

    except ClientError as e:
        print(f"Error performing DynamoDB query: {e}")
        return {
            'statusCode': 500,
            'body': f"Error performing DynamoDB query: {e}"
        }