const express = require('express');
const bodyParser = require('body-parser');
const swig = require('swig');
import studentRoute from '../routes/student.server.routes';
import groupRoute from '../routes/group.server.routes';
import lessonModuleRoute from '../routes/lessonModule.server.routes';
import courseRoute from '../routes/course.server.routes';
import lessonRoute from '../routes/lesson.server.routes';
import lessonFeedbackRoute from '../routes/lessonFeedback.server.routes';


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
  app.use('/groups', groupRoute);
  app.use('/lessonModules', lessonModuleRoute);
  app.use('/courses', courseRoute);
  app.use('/lessons', lessonRoute);
  app.use('/lessonFeedbacks', lessonFeedbackRoute);

  return app;
};
