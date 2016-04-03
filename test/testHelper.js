const config = require('../config/config');
const mongoose = require('mongoose');

mongoose.connect(config.db, err => {
  if (err) {
    console.log(err);
  } else {
    return;
  }
});
