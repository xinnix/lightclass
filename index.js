var app = require('./config/express')();
var config = require('./config/config');



app.listen(config.port);
