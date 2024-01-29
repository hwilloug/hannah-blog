variable "function_name" {
  type = string
  description = "The name of the function"
}

output "function_name" {
  value = var.function_name
  description = "Same as input variable"
}