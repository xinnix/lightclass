
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: String,
  type: String,
  master: String,
  create_at: {
    type: Date,
    default: Date.now,
  },
  students: [{
    type: Schema.ObjectId,
    ref: 'Student ',
  }],
});
mongoose.model('Group', GroupSchema);
