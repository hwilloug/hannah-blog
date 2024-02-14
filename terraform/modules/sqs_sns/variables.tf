variable "queue_name" {
  description = "the name of the queue"
  type = string
}

output "queue_name" {
  value = var.queue_name
}

variable "ses_domain_identity" {
  description = "the ses domain identity"
  type = string
}

output "ses_domain_identity" {
  value = var.ses_domain_identity
}

variable "notification_type" {
  description = "Bounce, Complaint, or Delivery"
  type = string
}

output "notification_type" {
  value = var.notification_type
}