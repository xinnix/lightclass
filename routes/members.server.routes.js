'use strict'

module.exports = function(app){
  app.get('/', function(req, res) {
      res.render('index',{hello:'world'} );
  });
  app.get('/signup', function(req, res) {
      res.render('signup',{} );
  });
  app.get('/memberlist', function(req, res) {
      res.render('memberlist',{} );
  });
  app.get('/resultinput', function(req, res) {
      res.render('resultinput',{} );
  });
  app.post('/', function(req, res) {
      var req_msg = req.body.message;
      res.send(req_msg);
  });
}
