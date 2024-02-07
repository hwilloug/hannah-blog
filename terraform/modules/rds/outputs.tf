output "host" {
  value = aws_rds_cluster_instance.db.endpoint
}

output "port" {
  value = aws_rds_cluster_instance.db.port
}

output "username" {
  value = aws_rds_cluster.cluster.master_username
}

output "password" {
  value = aws_rds_cluster.cluster.master_password
}