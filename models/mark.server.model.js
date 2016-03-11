'use strict';
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MarkSchema = new Schema({
  exam: {
    type: Schema.ObjectId,
    ref: 'Exam',
    required: true
  },
  member: {
    type: Schema.ObjectId,
    ref: 'Member',
    required: true
  },
  mark:{
    type:Number,
  },
  memo:{
    type:String,
  },
  date: {
    type: Date,
    default: Date.now
  },
}, {
  collection: 'Mark'
});

// MarkSchema.statics.findOneByPhoneNumber = function (phone_number, callback) {
//     this.findOne({phone_number: phone_number}, callback);
// };

MarkSchema.statics.load = function (options, cb) {
    this.findOne(options.criteria)
        .exec(cb);
};

MarkSchema.statics.loadAll = function (options, cb) {
    this.find(options.criteria)
        .limit(options.limit)
        .sort(options.sortBy || '-_id')
        .exec(cb);
};

var MarkModel = mongoose.model('Mark', MarkSchema);
