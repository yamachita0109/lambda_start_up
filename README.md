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
$ docker-compose run --rm template npm install standard
$ docker-compose run --rm template npm install mocha
$ docker-compose run --rm template npm install istanbul
$ docker-compose run --rm template npm install power-assert
$ docker-compose run --rm template npm install intelli-espower-loader
```

## Exec Test

```
$ docker-compose run --rm template npm test
```

## OutPut Coverage Report

```
$ docker-compose run --rm template npm run test-coverage
```
