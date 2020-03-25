const express = require('express')
const bodyParser = require('body-parser')
const DBcontroller = require('./controller/index')

const app = express()

// HTTP to JSON

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Hey dude ;)')
})

app.get('/testing', DBcontroller.test)

app.post('/saveDocument', DBcontroller.saveDocument)

app.listen(3000)

module.exports = app;