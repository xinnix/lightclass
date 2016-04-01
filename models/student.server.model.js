
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  student_id: String,
  name: String,
  gender: String,
  grade: String,
  school: String,
  phone: String,
  birthday: Date,
  address: String,
  password: String,
  create_at: {
    type: Date,
    default: Date.now,
  },
  group: {
    type: Schema.ObjectId,
    ref: 'Group',
  },
});
mongoose.model('Student', StudentSchema);
// MemberSchema.statics.findOneByPhoneNumber = function (phone_number, callback) {
//     this.findOne({phone_number: phone_number}, callback);
// };
//
// MemberSchema.statics.load = function (options, cb) {
//     this.findOne(options.criteria)
//         .exec(cb);
// };
//
// MemberSchema.statics.loadAll = function (options, cb) {
//     this.find(options.criteria)
//         .limit(options.limit)
//         .sort(options.sortBy || '-_id')
//         .exec(cb);
// };
