module "images_s3_bucket" {
  source = "./modules/cloudfront_s3_bucket"

  bucket_name = "poppyland-blog-images"
  domain      = "blog-images.poppyland.dev"
}

module "articles_table" {
  source = "./modules/dynamo_db_table"

  gsi_hash_key = "Category"
  gsi_hash_key_type = "S"
  hash_key = "Id"
  hash_key_type = "N"
  range_key = "CreatedAt"
  range_key_type = "S"
  table_name = "PoppylandBlogArticles"
}

module "newsletter_list_table" {
  source = "./modules/dynamo_db_table"

  gsi_hash_key = "CreatedAt"
  gsi_hash_key_type = "S"
  hash_key = "Email"
  hash_key_type = "S"
  range_key = "Subscribed"
  range_key_type = "S"
  table_name = "PoppylandBlogNewsletterList"
}