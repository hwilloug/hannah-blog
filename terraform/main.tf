module "images_s3_bucket" {
  source = "./modules/cloudfront_s3_bucket"

  bucket_name = "poppyland-blog-images"
  domain      = "blog-images.poppyland.dev"
}