output "base_url" {
  value       = aws_api_gateway_deployment.api.invoke_url
  description = "The API's URL"
}