'use strict'
var member = require('../controllers/members.server.controllers');
var lclass = require('../controllers/lclasses.server.controllers');


module.exports = function(app){
  app.get('/', function(req, res) {
      res.redirect('/memberlist');
  });
  app.get('/signup', lclass.list, function(req,res){
    console.log(req.lclasses);
    res.render('member/member_create',{lclasses:req.lclasses});
  }).post('/signup',member.create);
  app.get('/memberlist',member.list);
}
