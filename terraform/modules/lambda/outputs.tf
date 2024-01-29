output "invoke_arn" {
  value       = aws_lambda_function.function.invoke_arn
  description = "The invoke ARN for the lambda function"
}