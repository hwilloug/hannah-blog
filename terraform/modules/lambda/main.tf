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
  source_file      = "${path.module}/../../../backend/${var.function_name}.py"
  output_path      = "${path.module}/../../../backend/lambda_deployment_packages/${var.function_name}.zip"
  output_file_mode = "0666"
}

resource "aws_lambda_function" "function" {
  filename      = data.archive_file.function_code_zip.output_path
  function_name = var.function_name
  role          = aws_iam_role.lambda_role.arn
  handler       = "${var.function_name}.lambda_handler"
  runtime       = "python3.8"
  depends_on    = [aws_iam_role_policy_attachment.lambda_attach_policy_to_role]
}