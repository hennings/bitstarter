
var fs = require("fs");
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var b = fs.readFileSync("index.html");
  response.send(b.toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});