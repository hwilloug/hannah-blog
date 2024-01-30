from boto3 import resource
from botocore.exceptions import ClientError
from os import environ
from json import dumps


def lambda_handler(event, context):
    table_name = environ.get("TABLE_NAME")
    search_key = environ.get("SEARCH_KEY", "")
    query_params = event.get("queryStringParameters", {})
    if query_params is None:
        query_params = {}
    query = query_params.get(search_key.lower())

    dynamodb = resource('dynamodb')

    table = dynamodb.Table(table_name)

    try:
        if query is not None:
            response = table.scan(
                FilterExpression=f"{search_key} = :value",
                ExpressionAttributeValues={
                    ":value": query
                }
            )
        else:
            response = table.scan()

        items = response.get("Items")
        return {
            "statusCode": 200,
            "body": dumps(items)
        }
    except ClientError as e:
        print(f"Error scanning DynamoDB table: {e}")
        return {
            'statusCode': 500,
            'body': f"Error scanning DynamoDB table: {e}"
        }