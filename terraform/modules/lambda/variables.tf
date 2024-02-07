variable "database_username" {
  type        = string
  description = "The username for the database"
}

output "database_username" {
  value       = var.database_username
  description = "Same as input variable"
}

variable "database_password" {
  type        = string
  description = "The password for the database"
}

output "database_password" {
  value       = var.database_password
  description = "Same as input variable"
}

variable "database_host" {
  type        = string
  description = "The host for the database"
}

output "database_host" {
  value       = var.database_host
  description = "Same as input variable"
}

variable "database_port" {
  type        = string
  description = "The host for the database"
}

output "database_port" {
  value       = var.database_port
  description = "Same as input variable"
}

variable "database_name" {
  type        = string
  description = "The name of the database"
}

output "database_name" {
  value       = var.database_name
  description = "Same as input variable"
}

variable "function_name" {
  type        = string
  description = "The name of the function"
}

output "function_name" {
  value       = aws_lambda_function.function.function_name
  description = "Same as input variable"
}

variable "lambda_layer_arns" {
  type        = list(string)
  description = "A list of lambda layer arns for the lambdas"
}

output "lambda_layer_arns" {
  value       = var.lambda_layer_arns
  description = "Same as input variable"
}

variable "partition_key" {
  type        = string
  description = "The name of the partition on which to query"
}

output "partition_key" {
  value       = var.partition_key
  description = "Same as input variable"
}

variable "search_key" {
  type        = string
  description = "The name of the gsi on which to query"
}

output "search_key" {
  value       = var.search_key
  description = "Same as input variable"
}

variable "sort_key" {
  type        = string
  description = "The name of the range key on which to sort the results"
}

output "sort_key" {
  value       = var.sort_key
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