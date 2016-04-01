
/**
 * Module dependencies.
 */
require('../../models/student.server.model');

const should = require('should');
const mongoose = require('mongoose');
const Student = mongoose.model('Student');


/**
 * Globals
 */
let student;
/**
 * Unit tests
 */
describe('Student Model Unit Tests:', function () {

  beforeEach(done => {
    student = new Student({
      student_id: '10000',
      name: 'full name',
      gender: 'male',
      grade: '初三',
      school: '西工大',
      phone: '15349216763',
      birthday: Date.now(),
      address: '长安中路',
      password: 'tj',
    });
    done();
  });

  describe('Method Save', function () {
    it('should be able to save without problems', function (done) {
      this.timeout(10000);
      return student.save(err => {
        should.not.exist(err);
        done();
      });
    });

    // it('should be able to show an error when try to save without title', function (done) {
    //   student.name = 123;
    //
    //   return article.save(function (err) {
    //     should.exist(err);
    //     done();
    //   });
    // });
  });

  afterEach(function (done) {
    Student.remove().exec(done);
  });
});
