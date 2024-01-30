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

resource "aws_cloudfront_distribution" "api_distribution" {
  origin {
    domain_name              = "${aws_apigatewayv2_api.api.id}.execute-api.us-east-1.amazonaws.com"
    origin_id                = local.api_origin_id
    origin_path              = "/${aws_apigatewayv2_stage.stage.name}"
  
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  enabled         = true
  is_ipv6_enabled = true

  aliases = [var.domain]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.api_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Name        = "PoppylandBlog"
    Environment = "Production"
  }

  viewer_certificate {
    acm_certificate_arn = data.aws_acm_certificate.acm_certificate.arn
    ssl_support_method  = "sni-only"
  }
}


data "aws_route53_zone" "poppyland_route53_zone" {
  name = "poppyland.dev"
}

resource "aws_route53_record" "route53_record" {
  zone_id = data.aws_route53_zone.poppyland_route53_zone.zone_id
  type    = "A"
  name    = var.domain

  alias {
    name                   = aws_cloudfront_distribution.api_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.api_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}