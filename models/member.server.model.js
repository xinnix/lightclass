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
  baby_birthday: Date,
  isBoy: Boolean,  // sexual

  signup_time: {
    type: Date,
    default: Date.now
  },
  valid_days: Number,
  level: {  	// 会员类型 0,1,2
    type: Number,
    enum: [0, 1, 2]
  },
  parent_name: String,
  address: String,
  email: {
    type: String,
    match: /.+\@.+\..+/
  } ,
  weixin: String,
  other: String,  // 备注
  head_photo: String // 头像
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
