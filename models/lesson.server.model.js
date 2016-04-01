
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
  group: {
    type: Schema.ObjectId,
    ref: 'Group',
  },
  lesson_module: {
    type: Schema.ObjectId,
    ref: 'LessonModule',
  },
  date: String,
  process: String,
  feedbacks: [{
    type: Schema.ObjectId,
    ref: 'Feedback',
  }],
});
mongoose.model('Lesson', LessonSchema);
