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

locals {
  api_origin_id = "${var.table_name}-api-origin"
}

data "aws_acm_certificate" "acm_certificate" {
  domain = "poppyland.dev"
}

data "aws_route53_zone" "poppyland_route53_zone" {
  name = "poppyland.dev"
}

resource "aws_apigatewayv2_domain_name" "api_domain_name" {
  domain_name = "blog-api.poppyland.dev"

  domain_name_configuration {
    certificate_arn = data.aws_acm_certificate.acm_certificate.arn
    endpoint_type   = "REGIONAL"
    security_policy = "TLS_1_2"
  }
}

resource "aws_apigatewayv2_api_mapping" "mapping" {
  api_id      = aws_apigatewayv2_api.api.id
  domain_name = aws_apigatewayv2_domain_name.api_domain_name.id
  stage       = aws_apigatewayv2_stage.stage.id
}

resource "aws_route53_record" "route53_record" {
  name    = var.domain
  type    = "A"
  zone_id = data.aws_route53_zone.poppyland_route53_zone.zone_id

  alias {
    name                   = aws_apigatewayv2_domain_name.api_domain_name.domain_name_configuration[0].target_domain_name
    zone_id                = aws_apigatewayv2_domain_name.api_domain_name.domain_name_configuration[0].hosted_zone_id
    evaluate_target_health = false
  }
}