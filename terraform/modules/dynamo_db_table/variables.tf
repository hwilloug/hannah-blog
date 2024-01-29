variable "gsi_hash_key" {
    type = string
    description = "The global secondary index hash key for the table"
}

output "gsi_hash_key" {
  value = var.gsi_hash_key
  description = "Same as input variable"
}

variable "gsi_hash_key_type" {
    type = string
    description = "The type of the global secondary index hash key for the table"
}

output "gsi_hash_key_type" {
  value = var.gsi_hash_key_type
  description = "Same as input variable"
}

variable "hash_key" {
    type = string
    description = "The hash key for the table"
}

output "hash_key" {
  value = var.hash_key
  description = "Same as input variable"
}

variable "hash_key_type" {
    type = string
    description = "The type of the hash key for the table"
}

output "hash_key_type" {
  value = var.hash_key_type
  description = "Same as input variable"
}

variable "range_key" {
    type = string
    description = "The range key for the table"
}

output "range_key" {
  value = var.range_key
  description = "Same as input variable"
}

variable "range_key_type" {
    type = string
    description = "The type of the range key for the table"
}

output "range_key_type" {
  value = var.range_key_type
  description = "Same as input variable"
}

variable "table_name" {
  type = string
  description = "The name of the table"
}

output "table_name" {
  value = var.table_name
  description = "Same as input variable"
}