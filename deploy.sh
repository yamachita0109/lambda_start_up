#!/bin/sh

AWS_IAM_USER_NAME=$1
AWS_ACCESS_KEY_ID=$2
AWS_SECRET_ACCESS_KEY=$3
AWS_DEFAULT_REGION=$4
AWS_TEMPLATE_FILE=$5
AWS_S3_BUCKET=$6
AWS_STACK=$7

aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID --profile $AWS_IAM_USER_NAME
aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY --profile $AWS_IAM_USER_NAME
aws configure set region $AWS_DEFAULT_REGION --profile $AWS_IAM_USER_NAME

aws cloudformation package --template-file $AWS_TEMPLATE_FILE --s3-bucket $AWS_S3_BUCKET --s3-prefix `date '+%Y%m%d%H%M%S'` --output-template-file output.yml --profile $AWS_IAM_USER_NAME
aws cloudformation deploy --region $AWS_DEFAULT_REGION --template-file output.yml --stack-name $AWS_STACK --profile $AWS_IAM_USER_NAME
