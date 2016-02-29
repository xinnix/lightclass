var express = require('express'),
    app = express();

var port = process.env.PORT || 3000;
var swig = require('swig');


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', './views');

app.use(require('body-parser').urlencoded({
    extended: true
}));

app.use(express.static('public'));



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

app.listen(port);
