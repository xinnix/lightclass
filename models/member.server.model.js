'use strict';
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MemberSchema = new Schema({
  phone_number: {
    type: String,
    required: true
  },
  student_name: {
    type: String,
    required: true
  },
  gender: {
    type:String
  },
  lclass: {
    type: Schema.ObjectId,
    ref: 'Lclass',
    required: true
  },
  signup_time: {
    type: Date,
    default: Date.now
  },
  school:{
    type:String,

  }
}, {
  collection: 'member'
});

MemberSchema.statics.findOneByPhoneNumber = function (phone_number, callback) {
    this.findOne({phone_number: phone_number}, callback);
};

MemberSchema.statics.load = function (options, cb) {
    this.findOne(options.criteria)
        .exec(cb);
};

MemberSchema.statics.loadAll = function (options, cb) {
    this.find(options.criteria)
        .limit(options.limit)
        .sort(options.sortBy || '-_id')
        .exec(cb);
};

var MemeberModel = mongoose.model('Member', MemberSchema);
