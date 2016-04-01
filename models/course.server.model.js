
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: String,
  lesson_modules: [{
    type: Schema.ObjectId,
    ref: 'LessonModule',
  }],
  period: String,
  memo: String,
  create_at: {
    type: Date,
    default: Date.now,
  },
});
mongoose.model('Course', CourseSchema);
