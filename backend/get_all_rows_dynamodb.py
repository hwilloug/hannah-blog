from boto3 import resource
from botocore.exceptions import ClientError
from os import environ
from json import dumps


def lambda_handler(event, context):
    table_name = environ.get("TABLE_NAME")
    search_key = environ.get("SEARCH_KEY")
    page_size = 5
    start_key = event.get("exclusive_start_key")
    query_params = event.get("queryStringParameters", {})
    query = query_params.get(search_key.lower())

    dynamodb = resource('dynamodb')

    table = dynamodb.Table(table_name)

    try:
        if start_key is not None and query is not None:
            response = table.scan(
                Limit=page_size,
                ExclusiveStartKey=start_key,
                KeyConditionExpression=f"{search_key} = :value",
                ExpressionAttributeValues={
                    ":value": {"S": query}
                },
                ScanIndexForward=False
            )
        elif start_key is not None and query is None:
            response = table.scan(
                Limit=page_size,
                ExclusiveStartKey=start_key,
                ScanIndexForward=False
            )
        elif start_key is None and query is not None:
            response = table.scan(
                Limit=page_size,
                KeyConditionExpression=f"{search_key} = :value",
                ExpressionAttributeValues={
                    ":value": {"S": query}
                },
                ScanIndexForward=False
            )
        else:
            response = table.scan(
                Limit=page_size,
                ScanIndexForward=False
            )
        items = response.get("Items")
        
        last_evaluated_key = response.get("LastEvaluatedKey")
        if last_evaluated_key:
            return {
                "statusCode": 200,
                "body": dumps({
                    "items": items,
                    "last_evaluated_key": last_evaluated_key
                })
            }
        else:
            return {
                "statusCode": 200,
                "body": dumps({"items": items})
            }
    except ClientError as e:
        print(f"Error scanning DynamoDB table: {e}")
        return {
            'statusCode': 500,
            'body': f"Error scanning DynamoDB table: {e}"
        }