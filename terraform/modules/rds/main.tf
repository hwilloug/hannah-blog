locals {
  availability_zones  = ["us-east-1a", "us-east-1b", "us-east-1c"]
  vpc_cidr            = "10.0.0.0/16"
  public_subnets_cidr = ["10.0.1.0/24", "10.0.85.0/24", "10.0.170.0/24"]
}

resource "aws_vpc" "vpc" {
  cidr_block           = local.vpc_cidr
  enable_dns_hostnames = true
  enable_dns_support   = true
}

resource "aws_internet_gateway" "ig" {
  vpc_id = aws_vpc.vpc.id
}

resource "aws_subnet" "public_subnet" {
  vpc_id                  = aws_vpc.vpc.id
  count                   = length(local.public_subnets_cidr)
  availability_zone       = element(local.availability_zones, count.index)
  cidr_block              = element(local.public_subnets_cidr, count.index)
  map_public_ip_on_launch = true
}

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.vpc.id
}

resource "aws_route" "public_internet_gateway" {
  route_table_id         = aws_route_table.public.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.ig.id
}

resource "aws_route_table_association" "public" {
  count          = length(local.public_subnets_cidr)
  subnet_id      = element(aws_subnet.public_subnet.*.id, count.index)
  route_table_id = aws_route_table.public.id
}

resource "aws_security_group" "default" {
  name        = "${var.database_name}-default-sg"
  description = "Default security group to allow inbound/outbound from the VPC"
  vpc_id      = aws_vpc.vpc.id
  depends_on  = [aws_vpc.vpc]
  ingress {
    from_port = "0"
    to_port   = "0"
    protocol  = "-1"
    self      = true
  }

  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Adjust as needed for your security requirements
  }

  egress {
    from_port   = "0"
    to_port     = "0"
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_db_subnet_group" "subnet_group" {
  name       = "${var.database_name}_subnet_group"
  subnet_ids = [for subnet in aws_subnet.public_subnet : subnet.id]
}

resource "aws_kms_key" "postgres_kms_key" {
  description = "The KMS key for the posgres db pw"
}

data "aws_ssm_parameter" "postgres_password" {
  name = "/hannahshobbyroom/postgresql/password"
}

resource "aws_rds_cluster" "cluster" {
  cluster_identifier      = var.cluster_name
  availability_zones      = local.availability_zones
  engine                  = "aurora-postgresql"
  database_name           = var.database_name
  master_username         = "postgres"
  master_password         = data.aws_ssm_parameter.postgres_password.value
  backup_retention_period = 5
  preferred_backup_window = "07:00-09:00"
  skip_final_snapshot     = true
  db_subnet_group_name    = aws_db_subnet_group.subnet_group.id
  vpc_security_group_ids  = [aws_security_group.default.id]
  apply_immediately       = true
  enable_http_endpoint    = true
  engine_mode             = "provisioned"

  serverlessv2_scaling_configuration {
    max_capacity = 1.0
    min_capacity = 0.5
  }

  depends_on = [aws_vpc.vpc, aws_internet_gateway.ig]
}

resource "aws_rds_cluster_instance" "db" {
  identifier          = var.database_name
  instance_class      = "db.serverless"
  cluster_identifier  = aws_rds_cluster.cluster.id
  engine              = aws_rds_cluster.cluster.engine
  engine_version      = aws_rds_cluster.cluster.engine_version
  publicly_accessible = true
}