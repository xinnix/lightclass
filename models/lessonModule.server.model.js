
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonModuleSchema = new Schema({
  name: String,
  period: String,
  textbook: String,
  exercise: String,
  test: String,
  homework: Date,
  memo: String,
  create_at: {
    type: Date,
    default: Date.now,
  },
  feedback: [{
    teacher: String,
    note: String,
    keypoint: String,
  }],
});
mongoose.model('LessonModule', LessonModuleSchema);
