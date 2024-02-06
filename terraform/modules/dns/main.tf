resource "aws_route53_zone" "zone" {
  name = var.domain
}

output "route53_zone_id" {
  description = "The zone ID in Route53"
  value       = aws_route53_zone.zone.zone_id
}

resource "aws_acm_certificate" "cert" {
  domain_name       = var.domain
  validation_method = "DNS"

  tags = {
    Environment = "Production"
    Name        = var.domain
  }
}

output "acm_certificate_arn" {
  value = aws_acm_certificate.cert.arn
}

resource "aws_route53_record" "cert_cname" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      type   = dvo.resource_record_type
      record = dvo.resource_record_value
    }
  }

  zone_id = aws_route53_zone.zone.zone_id
  name    = each.value.name
  type    = each.value.type
  ttl     = "30"
  records = [each.value.record]
}