# Reproduction repository for bun issue #6555

https://orm.drizzle.team/

Just a little repo to reproduce the issue.

# How to

## Start local DB
> It requires Docker to be installed (https://docs.docker.com/get-docker/)

```bash
# In a terminal, run
docker compose up

# ctrl + c to stop
```

## Install dependencies
```bash
# In a terminal, run
npm install
# or
bun install
```

## Run the app with node
```bash
# In a terminal, run
node index.js
```

# The result will be:
```bash
> node index.js
Result(1) [ { message: 'hello world!' } ]
done
```

## Run the app with bun
```bash
# In a terminal, run
bun index.js
```

# The result will be:
```bash
> bun index.js
ResolveMessage {
  stack: "undefined\n    at cachedError (/Users/angel/code/bun-pg-repro/node_modules/postgres/cf/src/query.js:171:27)\n    at new Query (/Users
/angel/code/bun-pg-repro/node_modules/postgres/cf/src/query.js:35:47)\n    at sql (/Users/angel/code/bun-pg-repro/node_modules/postgres/cf/src/
index.js:115:37)\n    at <anonymous> (/Users/angel/code/bun-pg-repro/index.js:7:19)",
  query: undefined,
  parameters: undefined,
  args: [ "hello world!" ],
  types: null,
  code: undefined,
  importKind: undefined,
  level: undefined,
  message: undefined,
  position: undefined,
  referrer: undefined,
  specifier: undefined,
  toJSON: [Function: toJSON],
  toString: [Function: toString],
  name: "ResolveMessage",
  [Symbol(Symbol.toPrimitive)]: [Function: toPrimitive]
}
```
