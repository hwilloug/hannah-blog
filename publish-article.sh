#!/bin/bash

JSON_FILE=$1
TABLE_NAME="PoppylandBlogArticles"

echo '{"'$TABLE_NAME'":' > batch-write-input.json
cat $JSON_FILE | jq '.[] | {PutRequest: {Item: (to_entries | reduce .[] as $item ({};
  .[($item.key | capture("(?<first>.)").first | ascii_upcase + $item.key[1:]) ] = if ($item.value | type) == "array" then {"L": ($item.value | map({"S": .}))}
                             else {("S"): $item.value} end))}}' | jq -cs '.' >> batch-write-input.json
echo '}' >> batch-write-input.json

aws dynamodb batch-write-item --request-items file://batch-write-input.json