module "articles_get_all_rows_lambda" {
  source = "../lambda"

  database_host     = var.database_host
  database_port     = var.database_port
  database_username = var.database_username
  database_password = var.database_password
  database_name     = var.database_name
  function_name     = "get_all_rows_rds"
  table_name        = "articles"

  lambda_layer_arns = var.lambda_layer_arns
}

module "articles_get_row_lambda" {
  source = "../lambda"

  database_host     = var.database_host
  database_port     = var.database_port
  database_username = var.database_username
  database_password = var.database_password
  database_name     = var.database_name
  function_name     = "get_row_rds"
  table_name        = "articles"

  lambda_layer_arns = var.lambda_layer_arns
}

module "post_email_lambda" {
  source = "../lambda"

  database_host     = var.database_host
  database_port     = var.database_port
  database_username = var.database_username
  database_password = var.database_password
  database_name     = var.database_name
  function_name     = "post_email"
  table_name        = "newsletter"

  lambda_layer_arns = var.lambda_layer_arns
}

module "delete_email_lambda" {
  source = "../lambda"

  database_host     = var.database_host
  database_port     = var.database_port
  database_username = var.database_username
  database_password = var.database_password
  database_name     = var.database_name
  function_name     = "unsubscribe_email"
  table_name        = "newsletter"

  lambda_layer_arns = var.lambda_layer_arns
}

module "like_article_lambda" {
  source = "../lambda"

  database_host     = var.database_host
  database_port     = var.database_port
  database_username = var.database_username
  database_password = var.database_password
  database_name     = var.database_name
  function_name     = "like_article"
  table_name        = "article"

  lambda_layer_arns = var.lambda_layer_arns
}

module "post_comment_lambda" {
  source = "../lambda"

  database_host     = var.database_host
  database_port     = var.database_port
  database_username = var.database_username
  database_password = var.database_password
  database_name     = var.database_name
  function_name     = "post_comment"
  table_name        = "comments"

  lambda_layer_arns = var.lambda_layer_arns
}

module "get_email_preferences_lambda" {
  source = "../lambda"

  database_host     = var.database_host
  database_port     = var.database_port
  database_username = var.database_username
  database_password = var.database_password
  database_name     = var.database_name
  function_name     = "get_email_preferences"
  table_name        = "newsletter"

  lambda_layer_arns = var.lambda_layer_arns
}

module "update_email_preferences_lambda" {
  source = "../lambda"

  database_host     = var.database_host
  database_port     = var.database_port
  database_username = var.database_username
  database_password = var.database_password
  database_name     = var.database_name
  function_name     = "update_email_preferences"
  table_name        = "newsletter"

  lambda_layer_arns = var.lambda_layer_arns
}

resource "aws_apigatewayv2_api" "api" {
  name          = "${var.table_name}API"
  protocol_type = "HTTP"
  description   = "API for table: ${var.table_name}"
  
  cors_configuration {
    allow_methods = [ "GET", "POST", "OPTIONS", "HEAD"]
    allow_origins = [ "http://localhost:3000", "https://hannahshobbyroom.com"]
    allow_headers = [ "Content-Type", "Origin"]
  }
}

resource "aws_apigatewayv2_integration" "get_all_lambda_integration" {
  api_id           = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"

  connection_type      = "INTERNET"
  integration_method   = "POST"
  integration_uri      = module.articles_get_all_rows_lambda.invoke_arn
  passthrough_behavior = "WHEN_NO_MATCH"
}

resource "aws_apigatewayv2_integration" "get_item_lambda_integration" {
  api_id           = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"

  connection_type      = "INTERNET"
  integration_method   = "POST"
  integration_uri      = module.articles_get_row_lambda.invoke_arn
  passthrough_behavior = "WHEN_NO_MATCH"
}

resource "aws_apigatewayv2_integration" "post_email_lambda_integration" {
  api_id           = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"

  connection_type      = "INTERNET"
  integration_method   = "POST"
  integration_uri      = module.post_email_lambda.invoke_arn
  passthrough_behavior = "WHEN_NO_MATCH"
}

resource "aws_apigatewayv2_integration" "delete_email_lambda_integration" {
  api_id           = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"

  connection_type      = "INTERNET"
  integration_method   = "POST"
  integration_uri      = module.delete_email_lambda.invoke_arn
  passthrough_behavior = "WHEN_NO_MATCH"
}


resource "aws_apigatewayv2_integration" "like_article_lambda_integration" {
  api_id           = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"

  connection_type      = "INTERNET"
  integration_method   = "POST"
  integration_uri      = module.like_article_lambda.invoke_arn
  passthrough_behavior = "WHEN_NO_MATCH"
}

resource "aws_apigatewayv2_integration" "post_comment_lambda_integration" {
  api_id           = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"

  connection_type      = "INTERNET"
  integration_method   = "POST"
  integration_uri      = module.post_comment_lambda.invoke_arn
  passthrough_behavior = "WHEN_NO_MATCH"
}

resource "aws_apigatewayv2_route" "get_all_route" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "GET /articles"

  target = "integrations/${aws_apigatewayv2_integration.get_all_lambda_integration.id}"
}

resource "aws_apigatewayv2_route" "get_item_route" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "GET /articles/{slug}"

  target = "integrations/${aws_apigatewayv2_integration.get_item_lambda_integration.id}"
}

resource "aws_apigatewayv2_route" "post_email_route" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "POST /newsletter"

  target = "integrations/${aws_apigatewayv2_integration.post_email_lambda_integration.id}"
}

resource "aws_apigatewayv2_route" "delete_email_route" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "GET /newsletter/unsubscribe"

  target = "integrations/${aws_apigatewayv2_integration.delete_email_lambda_integration.id}"
}

resource "aws_apigatewayv2_route" "post_comment_route" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "POST /comments"

  target = "integrations/${aws_apigatewayv2_integration.post_comment_lambda_integration.id}"
}

resource "aws_apigatewayv2_route" "like_article_route" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "POST /articles/{slug}/like"

  target = "integrations/${aws_apigatewayv2_integration.like_article_lambda_integration.id}"
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

resource "aws_lambda_permission" "get_all_rds_lambda_permission" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = module.articles_get_all_rows_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.api.execution_arn}/*"
}


resource "aws_lambda_permission" "get_item_lambda_permission" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = module.articles_get_row_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.api.execution_arn}/*"
}

resource "aws_lambda_permission" "post_email_lambda_permission" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = module.post_email_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.api.execution_arn}/*"
}

resource "aws_lambda_permission" "delete_email_lambda_permission" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = module.delete_email_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.api.execution_arn}/*"
}

resource "aws_lambda_permission" "like_article_lambda_permission" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = module.like_article_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.api.execution_arn}/*"
}

resource "aws_lambda_permission" "post_comment_lambda_permission" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = module.post_comment_lambda.function_name
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