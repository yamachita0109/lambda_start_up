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

## Exec Test

```
$ docker-compose run --rm template npm test
```

## OutPut Coverage Report

```
$ docker-compose run --rm template npm run test-coverage
$ open src/coverage/index.html 
```

## Deploy

```
$ ./deploy.sh
```
