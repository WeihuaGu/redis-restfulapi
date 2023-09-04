# redis-restfulapi
## install
- `npm install`
- Set environment variables
  
  Set the following environment variables on your space provider if deployed：
  
1. set REDIS_URL 
2. set TOKEN env
  
  Or locally for testing:
  
1.`  export REDIS_URL="redis://default:password@host" `

2.` export TOKEN="hahaha"`

- `npm start`
## usage
- When making requests, please include the token in the header with the format "token:xxx", where "xxx" is the base64 value of the TOKEN variable that has been set.
### For example, if the TOKEN environment variable you set is "hiredis".
- then first convert it to base64.
```
echo hiredis | base64
aGlyZWRpcwo=
```

- Set a key
```
Get /redis/set/test/testkey/thetestvalue
HEADERS
token: dG9rZW4xMjMK
```
return 
```
{
    "result": "\"OK\""
}
```
- Get value
```
GET /redis/get/test/testkey
HEADERS
token: dG9rZW4xMjMK
```
return
```
{
    "testkey": "thetestvalue"
}
```

  
## restfulapi
- Get Value
`GET /redis/get/{prefix}/{key}`

- Delete Key
`GET /redis/del/{prefix}/{key}`

- Set Value
`GET /redis/set/{prefix}/{key}/{value}`

- Set JSON Value
`POST /redis/setjson/{prefix}/{key}`

- LPush to List
`GET /redis/push/{prefix}/{key}/{value}`

- LPush to List
`POST /redis/push/{prefix}/{key}`

- LPop from List
`GET /redis/lpop/{prefix}/{key}`

- RPop from List
`GET /redis/rpop/{prefix}/{key}`

- Get List 
`GET /redis/list/{prefix}/{key}`
