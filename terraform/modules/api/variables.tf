variable "domain" {
  type        = string
  description = "The name of domain name in which to deploy the api"
}

output "domain" {
  value       = var.domain
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