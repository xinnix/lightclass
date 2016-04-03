const express = require('express');
const bodyParser = require('body-parser');
const swig = require('swig');
import studentRoute from '../routes/student.server.routes';


export default () => {
  const app = express();
  app.engine('html', swig.renderFile);
  app.set('view engine', 'html');
  app.set('views', './views');

  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());
  app.use(express.static('./public'));

  app.use('/students', studentRoute);

  return app;
};
