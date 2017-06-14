var express = require('express');
var app = express();
var logger = require('morgan');
var path = require('path');
var port = process.env.PORT || 3000;

//Middleware
app.use(logger('dev'));
app.use(express.static('public'));

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname+ '/index.html'));
});

// app.use("/styles", express.static(__dirname + '/styles'));

app.listen(port);
console.log('=============================');
console.log('Server running on the Portfolio ' + port);
console.log('=============================');
