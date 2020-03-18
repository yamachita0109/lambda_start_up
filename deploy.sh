#!/bin/sh

# env
AWS_S3_BUCKET="lambda-template-bucket"
AWS_STACK_NAME="lambda-template-stack"
AWS_TEMPLATE_FILE="template.yml"

aws configure set aws_access_key_id $AWS_TEST_ACCESS_KEY_ID --profile $AWS_TEST_IAM_USER_NAME
aws configure set aws_secret_access_key $AWS_TEST_SECRET_ACCESS_KEY --profile $AWS_TEST_IAM_USER_NAME
aws configure set region $AWS_DEFAULT_REGION --profile $AWS_TEST_IAM_USER_NAME


# npm install
docker-compose run --rm template npm install --production

# create module
rm -fr release && mkdir release
cd src
zip -r ../app.zip index.js node_modules usecase.js
cd ../
mv app.zip release/

aws cloudformation package --template-file $AWS_TEMPLATE_FILE --s3-bucket $AWS_S3_BUCKET --s3-prefix `date '+%Y%m%d%H%M%S'` --output-template-file output.yml --profile $AWS_TEST_IAM_USER_NAME
aws cloudformation deploy --region $AWS_DEFAULT_REGION --template-file output.yml --stack-name $AWS_STACK_NAME --profile $AWS_TEST_IAM_USER_NAME
