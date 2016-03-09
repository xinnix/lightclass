'use strict'
var exam = require('../controllers/exams.server.controllers');
module.exports = function(app){
  app.get('/examcreate', function(req, res) {
      res.render('createexam',{} );
  }).post('/exam',exam.create);

  app.get('/examlist',exam.list);

}
