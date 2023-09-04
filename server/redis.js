const Redis = require("ioredis");
let client = new Redis(process.env.REDIS_URL);
var redisset = async(key,value)=>{
	return await client.set(key,value)
}

var redisget = async(key)=>{
        return await client.get(key)
}

var redislpush = async(key,list)=>{
        return await client.lpush(key,list)
}
var redislpop = async(key,list)=>{
        return await client.lpop(key)
}
var redisrpop = async(key,list)=>{
        return await client.rpop(key)
}

var redislrange = async(key,start,end)=>{
        return await client.lrange(key,start,end)
}

var redisdel = async(key)=>{
	return await client.del(key)
}


module.exports = {
	get:redisget,
	set:redisset,
	lpush:redislpush,
	lpop:redislpop,
	rpop:redisrpop,
	lrange:redislrange,
	del:redisdel

}
