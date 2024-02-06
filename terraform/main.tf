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

module "articles_api" {
  source = "./modules/api"

  domain        = "blog-api.poppyland.dev"
  partition_key = module.articles_table.hash_key
  search_key    = module.articles_table.gsi_hash_key
  sort_key      = module.articles_table.range_key
  table_name    = module.articles_table.table_name
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