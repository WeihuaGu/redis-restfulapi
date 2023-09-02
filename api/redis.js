var express = require('express')
var router = express.Router()
var redis = require('../server/redis')
var auth = require('../auth')

//auth
router.use(auth);
// define the services
router.get('/get/:prefix/:key',async function (req, res) {
  var thekey = req.params.prefix+'-'+req.params.key
  var value = await redis.get(thekey)
  var result = {}
  result[req.params.key] = value
  
  res.json(result)
})
router.get('/del/:prefix/:key',async function (req, res) {
  var thekey = req.params.prefix+'-'+req.params.key
  var result = await redis.del(thekey)
  res.json({
        result: JSON.stringify(result)
    })
});

router.get('/set/:prefix/:key/:value',async function (req, res) {
  var thekey = req.params.prefix+'-'+req.params.key
  var result = await redis.set(thekey,req.params.value)
  res.json({
        result: JSON.stringify(result)
    })
});
router.post('/setjson/:prefix/:key',async function (req, res) {
  var thekey = req.params.prefix+'-'+req.params.key
  var result = await redis.set(thekey,JSON.stringify(req.body))
  res.json({
        result: JSON.stringify(result)
    })
});

router.get('/push/:prefix/:key/:value',async function (req, res) {
  var thekey = req.params.prefix+'-'+req.params.key
  var result = await redis.lpush(thekey,req.params.value)
  res.json({
        result: JSON.stringify(result)
  })
});
router.post('/push/:prefix/:key',async function (req, res) {
  var thekey = req.params.prefix+'-'+req.params.key
  var result = await redis.lpush(thekey,JSON.stringify(req.body))
  res.json({
        result: JSON.stringify(result)
  })

});
router.get('/list/:prefix/:key',async function (req, res) {
  var thekey = req.params.prefix+'-'+req.params.key
  var result = {}
  var list = await redis.lrange(thekey,0,-1)
  result[req.params.key] = list
  res.json(result)
});


module.exports = router;
