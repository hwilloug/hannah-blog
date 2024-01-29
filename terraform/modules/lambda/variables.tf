variable "function_name" {
  type        = string
  description = "The name of the function"
}

output "function_name" {
  value       = aws_lambda_function.function.function_name
  description = "Same as input variable"
}

variable "table_name" {
  type        = string
  description = "The name of the table in which to query"
}

output "table_name" {
  value       = var.table_name
  description = "Same as input variable"
}