resource "aws_dynamodb_table" "table" {
  name = var.table_name
  billing_mode = "PAY_PER_REQUEST"
  hash_key = var.hash_key
  range_key = var.range_key

  attribute {
    name = var.hash_key
    type = var.hash_key_type
  }

  attribute {
    name = var.range_key
    type = var.range_key_type
  }

  attribute {
    name = var.gsi_hash_key
    type = var.gsi_hash_key_type
  }

  ttl {
    attribute_name = "TimeToExist"
    enabled        = false
  }

  global_secondary_index {
    name = "${var.gsi_hash_key}Index"
    hash_key = var.gsi_hash_key
    range_key = var.range_key
    projection_type = "ALL"
  }

  tags = {
    Name = "PoppylandBlog"
    Environment = "Production"
  }
}