'use strict';
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ExamSchema = new Schema({
  exam_title: {
    type: String,
    required: true
  },
  exam_memo: {
    type: String,
  },
  exam_lclass:{
    type: Schema.ObjectId,
    ref: 'Lclass',
    required: true
  },
  exam_date: {
    type: Date,
    default: Date.now
  },
}, {
  collection: 'exam'
});

// ExamSchema.statics.findOneByPhoneNumber = function (phone_number, callback) {
//     this.findOne({phone_number: phone_number}, callback);
// };

ExamSchema.statics.load = function (options, cb) {
    this.findOne(options.criteria)
        .exec(cb);
};

ExamSchema.statics.loadAll = function (options, cb) {
    this.find(options.criteria)
        .limit(options.limit)
        .sort(options.sortBy || '-_id')
        .exec(cb);
};

var ExamModel = mongoose.model('Exam', ExamSchema);
