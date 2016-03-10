'use strict'
var mark = require('../controllers/marks.server.controllers');


module.exports = function(app){
  app.get('/markcreate/:id',mark.findExamMembers, function(req, res) {
      res.render('mark/mark_create',{members:req.members} );
  })
}
