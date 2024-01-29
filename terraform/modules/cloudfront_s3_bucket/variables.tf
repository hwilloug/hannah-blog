variable "bucket_name" {
  description = "The name of the bucket"
  type        = string
}

output "bucket_name" {
  description = "Same as input variable"
  value       = var.bucket_name
}

variable "domain" {
  description = "The domain"
  type        = string
}

output "domain" {
  description = "Same as input variable"
  value       = var.domain
}