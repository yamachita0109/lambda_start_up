# lambda_template

## Environment

```
$ docker-compose up -d --build
$ docker-compose run --rm template npm install
```

## Exec Node.js

```
$ docker-compose run --rm template {cmd}
```

## Install Command

```
# dev
$ docker-compose run --rm template npm install -D standard
$ docker-compose run --rm template npm install -D mocha
$ docker-compose run --rm template npm install -D istanbul
$ docker-compose run --rm template npm install -D power-assert
$ docker-compose run --rm template npm install -D intelli-espower-loader
$ docker-compose run --rm template npm install -D aws-sdk-mock
$ docker-compose run --rm template npm install -D dotenv
$ docker-compose run --rm template npm install -D handlebars@4.5.3

# release
$ docker-compose run --rm template npm install aws-sdk
$ docker-compose run --rm template npm install log4js
$ docker-compose run --rm template npm install request
$ docker-compose run --rm template npm install request-promise
```

## Exec Test

```
$ docker-compose run --rm template npm test
```

## OutPut Coverage Report

```
$ docker-compose run --rm template npm run test-coverage
```

## Deploy

```
$ ./deploy.sh
```
