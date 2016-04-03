/**
 * Module dependencies.
 */
const should = require('should');
const request = require('supertest');
const mongoose = require('mongoose');
const Student = mongoose.model('Student');
import express from '../../config/express';


/**
 * Globals
 */
let app;
let agent;
let student;
/**
 * Unit tests
 */
describe('Student Controller Unit Tests:', function () {

  before(done => {
    app = express();
    agent = request.agent(app);
    done();
  })

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


  it('should be able to save student', done => {
    this.timeout(10000);
    agent.post('/students')
    .send(student)
    .expect(200)
    .end((studentSaveErr, studentSaveRes) => {
      if (studentSaveErr) {
        return done(studentSaveErr);
      }
      agent.get('/students')
      .expect(200)
      .end((studentGetErr, studentGetRes) => {
        const students = studentGetRes.body;
        (students[0].student_id).should.equal(student.student_id);
        (students[0].name).should.match('full name');
        done();
      });
    });
  });


  afterEach(function (done) {
    Student.remove().exec(done);
  });
});
