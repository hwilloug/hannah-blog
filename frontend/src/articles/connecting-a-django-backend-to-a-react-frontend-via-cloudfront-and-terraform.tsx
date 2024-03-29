import { useTheme } from "@mui/material";
import { ReactElement } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  ArticleContentContainer,
  Section,
} from "../components/StyledComponents";

const TcahDotCom: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();

  const code = [
    `locals {
    s3_origin_id = "S3-origin-react-app"
    alb_origin_id = "ALB-origin-django-app"
  }
  
  resource "aws_cloudfront_origin_access_identity" "oai" {
    comment = "$\{var.ecs_cluster_name} OAI"
  }
  
  resource "aws_cloudfront_distribution" "cf_distribution" {
    origin {
      domain_name = aws_s3_bucket.static_react_bucket.bucket_regional_domain_name
      origin_id   = local.s3_origin_id
  
      s3_origin_config {
        origin_access_identity = aws_cloudfront_origin_access_identity.oai.cloudfront_access_identity_path
      }
    }
  
    origin {
      domain_name = aws_alb.application_load_balancer.dns_name
      origin_id   = local.alb_origin_id
  
      custom_origin_config {
        http_port              = 80
        https_port             = 443
        origin_protocol_policy = "http-only"
        origin_ssl_protocols   = ["TLSv1.2"]
      }
    }
  
    enabled         = true
    is_ipv6_enabled = true
  
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
      compress               = true
    }
  
    ordered_cache_behavior {
      path_pattern     = "/index.html"
      allowed_methods  = ["GET", "HEAD", "OPTIONS"]
      cached_methods   = ["GET", "HEAD", "OPTIONS"]
      target_origin_id = local.s3_origin_id
  
      forwarded_values {
        query_string = false
  
        cookies {
          forward = "none"
        }
      }
  
      min_ttl                = 0
      default_ttl            = 0
      max_ttl                = 0
      compress               = true
      viewer_protocol_policy = "redirect-to-https"
    }
  
    ordered_cache_behavior {
      path_pattern     = "/api/*"
      allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
      cached_methods   = ["GET", "HEAD"]
      target_origin_id = local.alb_origin_id
  
      default_ttl = 0
      min_ttl     = 0
      max_ttl     = 0
  
      forwarded_values {
        query_string = true
        cookies {
          forward = "all"
        }
      }
  
      viewer_protocol_policy = "allow-all"
    }
  
    ordered_cache_behavior {
      path_pattern     = "/admin/*"
      allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
      cached_methods   = ["GET", "HEAD"]
      target_origin_id = local.alb_origin_id
  
      default_ttl = 0
      min_ttl     = 0
      max_ttl     = 0
  
      forwarded_values {
        query_string = true
        cookies {
          forward = "all"
        }
      }
  
      viewer_protocol_policy = "allow-all"
    }
  
    price_class = "PriceClass_100"
  
    viewer_certificate {
      cloudfront_default_certificate = true
    }
  
    retain_on_delete = true
  
    custom_error_response {
      error_caching_min_ttl = 300
      error_code            = 403
      response_code         = 200
      response_page_path    = "/index.html"
    }
  
    custom_error_response {
      error_caching_min_ttl = 300
      error_code            = 404
      response_code         = 200
      response_page_path    = "/index.html"
    }
  
    restrictions {
      geo_restriction {
        restriction_type = "none"
      }
    }
  }`,
  ];

  return (
    <ArticleContentContainer>
      <Section>
        <p>
          Using a combination of{" "}
          <a
            href="https://earthly.dev/blog/deploy-dockcontainers-to-awsecs-using-terraform/"
            target="_blank"
          >
            this blog post
          </a>{" "}
          and{" "}
          <a
            href="https://medium.com/geekculture/serve-your-react-app-with-aws-cloudfront-using-gitlab-and-terraform-322b2526943e"
            target="_blank"
          >
            this blog post
          </a>
          , I created the infrastructure in code for my dad's website. The only
          things I really changed were some variable names and how I connected
          the backend up to the frontend. Below is the terraform code for my
          cloudfront distribution.
        </p>
      </Section>
      <Section>
        <SyntaxHighlighter language="hcl" showLineNumbers>
          {code}
        </SyntaxHighlighter>
      </Section>
      <Section>
        <p>
          {" "}
          To get the frontend talking to the backend, I added another origin for
          my ALB. Then, I added the ordered_cache_behavior for the{" "}
          <SyntaxHighlighter customStyle={{ display: "inline" }}>
            /api/*
          </SyntaxHighlighter>{" "}
          and{" "}
          <SyntaxHighlighter customStyle={{ display: "inline" }}>
            /admin/*
          </SyntaxHighlighter>{" "}
          endpoints of the backend. Now, the same Cloudfront distribution serves
          the front- and back-ends, and the fronend can just make a call to
          /api/entry to get the entries from the database, as opposed to having
          to use the full URL for the backend ALB and having to deal with CORS.
        </p>
      </Section>
      <Section>
        <p>
          To visit the full website,{" "}
          <a href="https://d1pvqbo0it77t5.cloudfront.net/" target="_blank">
            click here
          </a>
          !
        </p>
      </Section>
    </ArticleContentContainer>
  );
};

export default TcahDotCom;
