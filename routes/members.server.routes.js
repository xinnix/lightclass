'use strict'
var member = require('../controllers/members.server.controllers');
module.exports = function(app){
  app.get('/', function(req, res) {
      res.redirect('/memberlist');
  });
  app.get('/signup', function(req, res) {
      res.render('signup',{} );
  }).post('/signup',member.create);
  app.get('/memberlist',member.list);
  

}
