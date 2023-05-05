## Description

Programming exercises made with [Nest](https://github.com/nestjs/nest) framework
and [CockroachDB](https://www.cockroachlabs.com)

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start
```
## Important:
For the first exercise, it was created an API Rest [GET] with endpoint: **"/repositories"**

For the second one, it was created an API Rest with endpoint: **"/organization/[<id>]"**
 - Read: GET
 - Write: POST (body required)
 - Update: PATCH (id & body required)
 - Delete: DELETE (id required)

For the third one, it was created an API Rest with endpoint: **"/metrics/<id>"**.
It requires a tribe id.

For the last one, it was created an API Rest with endpoint: **"/csv/<id>"**.
It requires a tribe id.
It's better to try it out in a web browser.