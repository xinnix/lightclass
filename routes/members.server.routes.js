'use strict'
var member = require('../controllers/members.server.controllers');

module.exports = function(app){
  app.get('/', function(req, res) {
      res.redirect('/memberlist');
  });
  app.get('/signup', member.signupInit).post('/signup',member.create);
  app.get('/memberlist',member.list);


}
