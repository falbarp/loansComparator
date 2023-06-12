<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

Up Database
```bash
$ docker-compose up -d
```
Modify .env
```bash
MONGO_URI=mongodb://localhost:27017/loans
PORT=3000

```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Fill in the database
```bash
GET localhost:3000/api/v1/seed
```
```
