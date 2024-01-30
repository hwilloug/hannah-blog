output "base_url" {
  value       = aws_apigatewayv2_stage.stage.invoke_url
  description = "The API's URL"
}

output "origin_id" {
  value       = local.api_origin_id
  description = "the origin for the api gateway"
}

output "id" {
  value       = aws_apigatewayv2_api.api.id
  description = "The execution arn for the api"
}

output "stage_name" {
  value       = aws_apigatewayv2_stage.stage.name
  description = "The name of the api stage"
}