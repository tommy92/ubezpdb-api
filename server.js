'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
};

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

var controllers = require('./controllers/index_controller')(app);
controllers.register();

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('UbezpDB API listening at http://%s:%s', host, port);
});
