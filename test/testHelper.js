require('../models/student.server.model');
require('../models/group.server.model');
require('../models/lessonModule.server.model');

const config = require('../config/config');
const mongoose = require('mongoose');

mongoose.connect(config.dbtest, err => {
  if (err) {
    console.log(err);
  } else {
    return;
  }
});
