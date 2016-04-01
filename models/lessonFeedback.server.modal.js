const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  student: {
    type: Schema.ObjectId,
    ref: 'Student',
  },
  lesson: {
    type: Schema.ObjectId,
    ref: 'Lesson',
  },
  attendance: Boolean,
  score: Number,
  resit: Number,
  perform: String,
  homework: String,
  error_questions: String,
  teacher_estimation: String,
  instrution: String,
  additional_tasks: String,
  create_at: {
    type: Date,
    default: Date.now,
  },
});
mongoose.model('Feedback', FeedbackSchema);
