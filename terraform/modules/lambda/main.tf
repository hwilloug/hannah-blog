resource "aws_iam_role" "lambda_role" {
  name               = "${var.function_name}_lambda_function_role"
  assume_role_policy = <<EOF
{
 "Version": "2012-10-17",
 "Statement": [
   {
     "Action": "sts:AssumeRole",
     "Principal": {
       "Service": "lambda.amazonaws.com"
     },
     "Effect": "Allow",
     "Sid": ""
   }
 ]
}
EOF
}

resource "aws_iam_policy" "lambda_iam_policy" {
  name   = "${var.function_name}_lambda_dynamodb_logs_iam_policy"
  path   = "/"
  policy = <<EOF
{
 "Version": "2012-10-17",
 "Statement": [
   {
     "Action": [
       "logs:CreateLogGroup",
       "logs:CreateLogStream",
       "logs:PutLogEvents"
     ],
     "Resource": "arn:aws:logs:*:*:*",
     "Effect": "Allow"
   },
   {
    "Action": [
        "dynamodb:BatchGetItem",
        "dynamodb:GetItem",
        "dynamodb:Query",
        "dynamodb:Scan"
    ],
    "Resource": "arn:aws:dynamodb:us-east-1:132507767948:table/${var.table_name}",
    "Effect": "Allow"
   }
 ]
}
EOF
}

resource "aws_iam_policy" "lambda_rds_iam_policy" {
  name   = "${var.function_name}_lambda_rds_iam_policy"
  path   = "/"
  policy = <<EOF
{
 "Version": "2012-10-17",
 "Statement": [
   {
    "Action": [
        "rds-db:connect"
    ],
    "Resource": "arn:aws:rds:us-east-1:132507767948:db:${var.database_name}",
    "Effect": "Allow"
   }
 ]
}
EOF
}

resource "aws_iam_policy" "lambda_logs_iam_policy" {
  name   = "${var.function_name}_lambda_logs_iam_policy"
  path   = "/"
  policy = <<EOF
{
 "Version": "2012-10-17",
 "Statement": [
   {
     "Action": [
       "logs:CreateLogGroup",
       "logs:CreateLogStream",
       "logs:PutLogEvents"
     ],
     "Resource": "arn:aws:logs:*:*:*",
     "Effect": "Allow"
   }
 ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "lambda_attach_policy_to_role" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = aws_iam_policy.lambda_iam_policy.arn
}

resource "aws_iam_role_policy_attachment" "lambda_attach_rds_policy_to_role" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = aws_iam_policy.lambda_rds_iam_policy.arn
}

data "archive_file" "function_code_zip" {
  type             = "zip"
  source_file      = "${path.module}/../../../backend/lambdas/${var.function_name}.py"
  output_path      = "${path.module}/../../../backend/lambdas/lambda_deployment_packages/${var.function_name}.zip"
  output_file_mode = "0666"
}

resource "aws_lambda_function" "function" {
  filename         = data.archive_file.function_code_zip.output_path
  source_code_hash = data.archive_file.function_code_zip.output_sha256
  function_name    = "${var.table_name}_${var.function_name}"
  role             = aws_iam_role.lambda_role.arn
  handler          = "${var.function_name}.lambda_handler"
  runtime          = "python3.9"
  layers           = var.lambda_layer_arns
  environment {
    variables = {
      TABLE_NAME        = var.table_name
      SEARCH_KEY        = var.search_key
      PARTITION_KEY     = var.partition_key
      SORT_KEY          = var.sort_key
      POSTGRES_USERNAME = var.database_username
      POSTGRES_PASSWORD = var.database_password
      POSTGRES_HOST     = var.database_host
      POSTGRES_PORT     = var.database_port
      POSTGRES_DB_NAME  = var.database_name
    }
  }
  depends_on = [aws_iam_role_policy_attachment.lambda_attach_policy_to_role]
}