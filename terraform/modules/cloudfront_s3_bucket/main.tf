resource "aws_s3_bucket" "s3_bucket" {
  bucket = var.bucket_name

  tags = {
    Name        = "PoppylandBlog"
    Environment = "Production"
  }
}

resource "aws_s3_bucket_ownership_controls" "bucket_ownership_controls" {
  bucket = aws_s3_bucket.s3_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_acl" "bucket_acl" {
  depends_on = [aws_s3_bucket_ownership_controls.bucket_ownership_controls]

  bucket = aws_s3_bucket.s3_bucket.id
  acl    = "private"
}

resource "aws_cloudfront_origin_access_control" "oai" {
  name                              = format("%s-oai", var.bucket_name)
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

locals {
  s3_origin_id = format("%s-origin", var.bucket_name)
}

data "aws_acm_certificate" "acm_certificate" {
  domain = "poppyland.dev"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name              = aws_s3_bucket.s3_bucket.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.oai.id
    origin_id                = local.s3_origin_id
  }

  enabled         = true
  is_ipv6_enabled = true

  aliases = [var.domain]

  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Name        = "PoppylandBlog"
    Environment = "Production"
  }

  viewer_certificate {
    acm_certificate_arn = data.aws_acm_certificate.acm_certificate.arn
    ssl_support_method  = "sni-only"
  }
}

data "aws_iam_policy_document" "s3_cloudfront_access" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = [
      "s3:GetObject"
    ]

    resources = [
      "${aws_s3_bucket.s3_bucket.arn}/*",
    ]

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = ["arn:aws:cloudfront::132507767948:distribution/${aws_cloudfront_distribution.s3_distribution.id}"]
    }
  }
}

resource "aws_s3_bucket_policy" "s3_bucket_policy" {
  bucket = aws_s3_bucket.s3_bucket.id
  policy = data.aws_iam_policy_document.s3_cloudfront_access.json
}



data "aws_route53_zone" "poppyland_route53_zone" {
  name = "poppyland.dev"
}

resource "aws_route53_record" "route53_record" {
  zone_id = data.aws_route53_zone.poppyland_route53_zone.zone_id
  type    = "A"
  name    = var.domain

  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}