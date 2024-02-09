output "invoke_arn" {
  value       = aws_lambda_function.function.invoke_arn
  description = "The invoke ARN for the lambda function"
}

output "role_name" {
  value = aws_iam_role.lambda_role.name
}