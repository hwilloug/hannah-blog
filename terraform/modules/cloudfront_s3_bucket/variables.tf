variable "api_id" {
  description = "The api id for the api"
  type        = string
  default     = ""
}

output "api_id" {
  description = "Same as input variable"
  value       = var.api_id
}

variable "api_origin_id" {
  description = "The origin id for the api"
  type        = string
  default     = ""
}

output "api_origin_id" {
  description = "Same as input variable"
  value       = var.api_origin_id
}

variable "api_stage_name" {
  description = "The stage name for the api"
  type        = string
  default     = ""
}

output "api_stage_name" {
  description = "Same as input variable"
  value       = var.api_stage_name
}

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