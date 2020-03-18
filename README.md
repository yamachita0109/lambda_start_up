# lambda_template

## Environment

```
$ docker-compose up -d --build
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

# prod
$ docker-compose run --rm template npm install aws-sdk
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
