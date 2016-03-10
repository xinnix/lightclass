'use strict'
var lclass = require('../controllers/lclasses.server.controllers');
module.exports = function(app){
  app.get('/lclasscreate', function(req, res) {
      res.render('lclass/lclass_create',{} );
  }).post('/lclasscreate',lclass.create);

  app.get('/lclasslist',lclass.list,function(req,res){
    res.render('lclass/lclass_list',{lclasses:req.lclasses});
  });

}
