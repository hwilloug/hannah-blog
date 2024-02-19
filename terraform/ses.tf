resource "aws_ses_email_identity" "identity" {
  email = "hannah@hannahshobbyroom.com"
}

data "archive_file" "jinja2_zip" {
  type             = "zip"
  source_dir       = "${path.module}/../backend/lambdas/layers/jinja2"
  output_path      = "${path.module}/../backend/lambdas/lambda_deployment_packages/jinja2.zip"
  output_file_mode = "0666"
}

resource "aws_lambda_layer_version" "jinja2_layer" {
  layer_name = "jinja2"
  s3_bucket  = aws_s3_bucket.lambda_layers_bucket.bucket
  s3_key     = "jinja2.zip"

  compatible_runtimes = ["python3.9"]
}

module "send_email_lambda" {
  source = "./modules/lambda"

  function_name = "send_new_article_email"

  table_name        = "newsletter"
  database_host     = module.articles_rds_cluster.host
  database_port     = module.articles_rds_cluster.port
  database_username = module.articles_rds_cluster.username
  database_password = module.articles_rds_cluster.password
  database_name     = module.articles_rds_cluster.database_name

  lambda_layer_arns = [aws_lambda_layer_version.psycopg2_layer.arn, aws_lambda_layer_version.jinja2_layer.arn]
}

resource "aws_iam_policy" "lambda_email_iam_policy" {
  name   = "send_new_article_email_lambda_email_iam_policy"
  path   = "/"
  policy = <<EOF
{
 "Version": "2012-10-17",
 "Statement": [
   {
    "Action": [
        "ses:SendEmail",
        "ses:SendRawEmail"
    ],
    "Resource": "*",
    "Effect": "Allow"
   }
 ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "lambda_attach_email_policy_to_role" {
  role       = module.send_email_lambda.role_name
  policy_arn = aws_iam_policy.lambda_email_iam_policy.arn
}