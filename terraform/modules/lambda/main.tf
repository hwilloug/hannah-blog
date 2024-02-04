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
  name   = "${var.function_name}_lambda_iam_policy"
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

resource "aws_iam_role_policy_attachment" "lambda_attach_policy_to_role" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = aws_iam_policy.lambda_iam_policy.arn
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
  runtime          = "python3.10"
  environment {
    variables = {
      TABLE_NAME    = var.table_name
      SEARCH_KEY    = var.search_key
      PARTITION_KEY = var.partition_key
      SORT_KEY      = var.sort_key
    }
  }
  depends_on = [aws_iam_role_policy_attachment.lambda_attach_policy_to_role]
}