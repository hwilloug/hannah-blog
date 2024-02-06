variable "acm_certificate_arn" {
  description = "The certificate arn for the domain"
  type        = string
}

output "acm_certificate_arn" {
  description = "Same as input variable"
  value       = var.acm_certificate_arn
}

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

variable "route53_zone_id" {
  description = "route53 zone id in which to create records"
  type = string
}

output "route53_zone_id" {
  description = "Same as input variable"
  value = var.route53_zone_id
}