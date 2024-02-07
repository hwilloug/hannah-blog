variable "lambda_layer_arns" {
  type        = list(string)
  description = "A list of lambda layer arns for the lambdas"
}

output "lambda_layer_arns" {
  value       = var.lambda_layer_arns
  description = "Same as input variable"
}

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

variable "domain" {
  type        = string
  description = "The name of domain name in which to deploy the api"
}

output "domain" {
  value       = var.domain
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