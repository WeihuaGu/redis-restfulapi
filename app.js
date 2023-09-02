const express = require('express')
const cors = require('cors');
var path = require('path')
var services = require('./services')
const app = express()
app.use(cors());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'))

services(app)

app.get('/', (req, res) => {
  res.render('index')
})
app.listen(3000);

module.exports = app;
