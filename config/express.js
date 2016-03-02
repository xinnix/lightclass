var express = require('express');
var bodyParser = require('body-parser');
var swig = require('swig');
var path = require('path');
var route = require('../routes/members.server.routes');

module.exports = function(){
  var app = express();
  app.engine('html', swig.renderFile);
  app.set('view engine', 'html');
  app.set('views', './views');

  app.use(bodyParser.urlencoded({
		extended: true
	}));
  app.use(bodyParser.json());

  app.use(express.static('public'));
  route(app);

  return app;
}
