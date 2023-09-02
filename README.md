# redis-restfulapi
## install
- `npm install`
- Set environment variables
  
  Set the following environment variables on your space provider if deployed：
  
- set REDIS_URL 
- set TOKEN env
  
  Or locally for testing:
  
` export REDIS_URL="redis://default:password@host" `

` export TOKEN="hahaha"`

- `npm start`
## usage
- When making requests, please include the token in the header with the format "token:xxx", where "xxx" is the base64 value of the TOKEN variable that has been set.
  
