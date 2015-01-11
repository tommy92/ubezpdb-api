'use strict';

var express = require('express');
var app = express();
var model = require('./models/index');

app.get('/', function(req, res) {
  res.send('hello world');
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('UbezpDB API listening at http://%s:%s', host, port);
});
