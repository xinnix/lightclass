'use strict';
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LclassSchema = new Schema({
  lclass_name: {
    type: String,
    required: true
  },
  lclass_memo: {
    type: String,
  },

  lclass_createdate: {
    type: Date,
    default: Date.now
  },
}, {
  collection: 'Lclass'
});

// LclassSchema.statics.findOneByPhoneNumber = function (phone_number, callback) {
//     this.findOne({phone_number: phone_number}, callback);
// };

LclassSchema.statics.load = function (options, cb) {
    this.findOne(options.criteria)
        .exec(cb);
};

LclassSchema.statics.loadAll = function (options, cb) {
    this.find(options.criteria)
        .limit(options.limit)
        .sort(options.sortBy || '-_id')
        .exec(cb);
};

var LclassModel = mongoose.model('Lclass', LclassSchema);
