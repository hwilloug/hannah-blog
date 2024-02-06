
variable "domain" {
  description = "The domain name"
  type        = string
}

output "domain" {
  description = "Same as input variable"
  value       = var.domain
}