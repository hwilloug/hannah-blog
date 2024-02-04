variable "cluster_name" {
  description = "The cluster name for the aurora cluster"
}

output "cluster_name" {
  description = "Same as input variable"
  value       = var.cluster_name
}

variable "database_name" {
  description = "The database name for the rds db"
}

output "database_name" {
  description = "Same as input variable"
  value       = var.database_name
}