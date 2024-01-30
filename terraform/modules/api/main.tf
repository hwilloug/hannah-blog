module "get_all_rows_lambda" {
  source = "../lambda"

  function_name = "get_all_rows_dynamodb"
  partition_key = var.partition_key
  search_key    = var.search_key
  sort_key      = var.sort_key
  table_name    = var.table_name
}

module "get_item_lambda" {
  source = "../lambda"

  function_name = "get_item_dynamodb"
  partition_key = var.partition_key
  search_key    = var.search_key
  sort_key      = var.sort_key
  table_name    = var.table_name
}

resource "aws_apigatewayv2_api" "api" {
  name          = "${var.table_name}API"
  protocol_type = "HTTP"
  description   = "API for table: ${var.table_name}"
}

resource "aws_apigatewayv2_integration" "get_all_lambda_integration" {
  api_id           = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"

  connection_type      = "INTERNET"
  integration_method   = "POST"
  integration_uri      = module.get_all_rows_lambda.invoke_arn
  passthrough_behavior = "WHEN_NO_MATCH"
}

resource "aws_apigatewayv2_integration" "get_item_lambda_integration" {
  api_id           = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"

  connection_type      = "INTERNET"
  integration_method   = "POST"
  integration_uri      = module.get_item_lambda.invoke_arn
  passthrough_behavior = "WHEN_NO_MATCH"
}

resource "aws_apigatewayv2_route" "get_all_route" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "GET /articles"

  target = "integrations/${aws_apigatewayv2_integration.get_all_lambda_integration.id}"
}

resource "aws_apigatewayv2_route" "get_item_route" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "GET /articles/{${lower(var.partition_key)}}"

  target = "integrations/${aws_apigatewayv2_integration.get_item_lambda_integration.id}"
}

resource "aws_cloudwatch_log_group" "api_log_group" {
  name = "/aws/apigateway/${aws_apigatewayv2_api.api.name}"
}

resource "aws_apigatewayv2_stage" "stage" {
  api_id = aws_apigatewayv2_api.api.id
  name   = "prod"

  auto_deploy = true

  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.api_log_group.arn
    format          = "{\"requestId\":\"$context.requestId\",\"ip\":\"$context.identity.sourceIp\",\"requestTime\":\"$context.requestTime\",\"httpMethod\":\"$context.httpMethod\",\"routeKey\":\"$context.routeKey\",\"status\":\"$context.status\",\"responseLength\":\"$context.responseLength\"}"
  }
}

resource "aws_lambda_permission" "get_all_lambda_permission" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = module.get_all_rows_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.api.execution_arn}/*"
}

resource "aws_lambda_permission" "get_item_lambda_permission" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = module.get_item_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.api.execution_arn}/*"
}