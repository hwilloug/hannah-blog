#!/bin/bash

DATABASE_ARN=arn:aws:rds:us-east-1:132507767948:cluster:hannahshobbyroom
DATABASE_NAME=hannahshobbyroom
SECRET_ARN=arn:aws:secretsmanager:us-east-1:132507767948:secret:rds-db-credentials/cluster-WPJMRROQNXJXENTUP3ANBSR2SE/postgres/1707251215355-9m89E0
DATABASE_NAME=hannahshobbyroom

# Get input for article
read -p 'Title: ' title 
read -p 'Subtitle: ' subtitle
read -p 'Image: ' img
read -p 'Image Alt: ' img_alt
read -p 'Category: ' category
read -p 'Subcategories: ' subcategory

# Publish article to RDS
slug=$(python3 backend/db/generate-slug.py "$title")
res=$(python3 backend/db/generate-insert-sql.py "$title" "$subtitle" "$img" "$img_alt" "$category" "$subcategory" "$slug")

echo =======================================
echo Inserting into RDS DB 
echo "$res"
aws rds-data execute-statement --resource-arn $DATABASE_ARN --database $DATABASE_NAME --secret-arn $SECRET_ARN --sql "$res"

# Send SES email about new article
aws lambda invoke --function-name newsletter_send_new_article_email --payload "$(echo -n '{ "slug": "'$slug'" }' | base64)" test.json