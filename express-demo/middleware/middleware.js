
const express = require("express");
const app = express();

// 自定义中间件
var myLogger = function(req, res, next) {
    console.log('logged')
    // next()
}
app.use('/', myLogger)

app.get('/', function(req,res) {
    res.send("Hello, world!")
})

app.listen(3000, function() {
    console.log("listening...")
})