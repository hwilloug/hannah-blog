resource "aws_sqs_queue" "queue" {
  name = "${var.queue_name}_queue"
}

resource "aws_sns_topic" "topic" {
  name = "${var.queue_name}_topic"
}

resource "aws_sns_topic_subscription" "subscription" {
  topic_arn = aws_sns_topic.topic.arn
  protocol = "sqs"
  endpoint = aws_sqs_queue.queue.arn
}

resource "aws_ses_identity_notification_topic" "notification" {
  topic_arn = aws_sns_topic.topic.arn
  notification_type = var.notification_type
  identity = var.ses_domain_identity
}