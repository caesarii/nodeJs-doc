const express = require("express");
const fs = require("fs");
const app = express();
// 静态目录
app.use(express.static("static"))

function sendHTML(path, res) {
    const options = {
        encoding: "utf-8"
    }
    fs.readFile(path, options, function(err, data) {
        res.send(data);
    })
}

app.get('/', function(req,res) {
    var path = 'index.html';
    sendHTML(path, res)
})

app.listen(8080, function() {
    console.log("listening...")
})