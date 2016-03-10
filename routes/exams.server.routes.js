'use strict'
var exam = require('../controllers/exams.server.controllers');
var lclass = require('../controllers/lclasses.server.controllers');


module.exports = function(app){
  app.get('/examcreate',lclass.list, function(req, res) {
      res.render('exam/exam_create',{lclasses:req.lclasses} );
  }).post('/exam',exam.create);

  app.get('/examlist',exam.list);

}
