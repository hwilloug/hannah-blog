data "aws_route53_zone" "poppyland_zone" {
  name = "poppyland.dev"
}

data "aws_acm_certificate" "poppyland_cert" {
  domain = "poppyland.dev"
}

module "images_s3_bucket" {
  source = "./modules/cloudfront_s3_bucket"

  acm_certificate_arn = data.aws_acm_certificate.poppyland_cert.arn
  bucket_name         = "poppyland-blog-images"
  domain              = "blog-images.poppyland.dev"
  route53_zone_id     = data.aws_route53_zone.poppyland_zone.zone_id
}

module "articles_table" {
  source = "./modules/dynamo_db_table"

  gsi_hash_key      = "Category"
  gsi_hash_key_type = "S"
  hash_key          = "Slug"
  hash_key_type     = "S"
  range_key         = "CreatedAt"
  range_key_type    = "S"
  table_name        = "PoppylandBlogArticles"
}

module "newsletter_list_table" {
  source = "./modules/dynamo_db_table"

  gsi_hash_key      = "CreatedAt"
  gsi_hash_key_type = "S"
  hash_key          = "Email"
  hash_key_type     = "S"
  range_key         = "Subscribed"
  range_key_type    = "S"
  table_name        = "PoppylandBlogNewsletterList"
}

resource "aws_s3_bucket" "lambda_layers_bucket" {
  bucket = "hannahshobbyroom-lambda-layers"

}

data "archive_file" "psycopg2_zip" {
  type             = "zip"
  source_dir       = "${path.module}/../backend/lambdas/layers"
  output_path      = "${path.module}/../backend/lambdas/lambda_deployment_packages/psycopg2.zip"
  output_file_mode = "0666"
}

resource "aws_lambda_layer_version" "psycopg2_layer" {
  layer_name = "psycopg2"
  s3_bucket  = aws_s3_bucket.lambda_layers_bucket.bucket
  s3_key     = "psycopg2.zip"

  compatible_runtimes = ["python3.9"]
}

module "articles_api" {
  source = "./modules/api"

  domain        = "blog-api.poppyland.dev"
  partition_key = module.articles_table.hash_key
  search_key    = module.articles_table.gsi_hash_key
  sort_key      = module.articles_table.range_key
  table_name    = module.articles_table.table_name

  lambda_layer_arns = [aws_lambda_layer_version.psycopg2_layer.arn]

  database_host     = module.articles_rds_cluster.host
  database_port     = module.articles_rds_cluster.port
  database_username = module.articles_rds_cluster.username
  database_password = module.articles_rds_cluster.password
  database_name     = module.articles_rds_cluster.database_name
}

module "dns" {
  source = "./modules/dns"

  domain = "hannahshobbyroom.com"
}

module "frontend_bucket" {
  source = "./modules/cloudfront_s3_bucket"

  acm_certificate_arn = module.dns.acm_certificate_arn
  api_id              = module.articles_api.id
  api_origin_id       = module.articles_api.origin_id
  api_stage_name      = module.articles_api.stage_name
  bucket_name         = "poppyland-blog-frontend"
  domain              = "hannahshobbyroom.com"
  route53_zone_id     = module.dns.route53_zone_id
}

module "redirect_bucket" {
  source = "./modules/cloudfront_s3_bucket"

  acm_certificate_arn = data.aws_acm_certificate.poppyland_cert.arn
  api_id              = module.articles_api.id
  api_origin_id       = module.articles_api.origin_id
  api_stage_name      = module.articles_api.stage_name
  bucket_name         = "poppyland-blog-redirect-frontend"
  domain              = "blog.poppyland.dev"
  route53_zone_id     = data.aws_route53_zone.poppyland_zone.zone_id
}

module "articles_rds_cluster" {
  source = "./modules/rds"

  cluster_name  = "hannahshobbyroom"
  database_name = "hannahshobbyroom"
}