var redis = require('./api/redis')
var loadrouter = (app)=>{
	app.use('/redis',redis)
}

exports = module.exports = loadrouter;
