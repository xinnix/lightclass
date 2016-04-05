/**
 * Module dependencies.
 */
const should = require('should');
const request = require('supertest');
const mongoose = require('mongoose');
const Group = mongoose.model('Group');
const Student = mongoose.model('Student');

import express from '../../config/express';


/**
 * Globals
 */
let app;
let agent;
let group;
let student1;
let student2;
/**
 * Unit tests
 */
describe('Group Controller Unit Tests:', function () {

  before(done => {
    app = express();
    agent = request.agent(app);
    done();
  })

  beforeEach(done => {
    student1 = new Student({
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
    student2 = new Student({
      student_id: '10001',
      name: 'full name2',
      gender: 'male',
      grade: '初三',
      school: '高新',
      phone: '15349216763',
      birthday: Date.now(),
      address: '王曲',
      password: 'tj',
    });
    group = new Group({
      name: '初三1班',
      type: '12人班',
      master: 'TJ',
      students:[student1,student2],
    })
    done();
  });


  it('should be able to save group with 2 students', done => {
    this.timeout(10000);
    agent.post('/groups')
    .send(group)
    .expect(200)
    .end((groupSaveErr, groupSaveRes) => {
      if (groupSaveErr) {
        return done(groupSaveErr);
      }
      agent.get('/groups')
      .expect(200)
      .end((groupGetErr, groupGetRes) => {
        const groups = groupGetRes.body;
        (groups[0].students).should.be.instanceof(Array).and.have.lengthOf(2);
        (groups[0].name).should.match('初三1班');
        done();
      });
    });
  });
  // it('should be able to update student', done => {
  //   this.timeout(10000);
  //   agent.post('/students')
  //   .send(student)
  //   .expect(200)
  //   .end((studentSaveErr, studentSaveRes) => {
  //     if (studentSaveErr) {
  //       return done(studentSaveErr);
  //     }
  //     student.address = '王曲';
  //     agent.put('/students/'+studentSaveRes.body._id)
  //     .send(student)
  //     .expect(200)
  //     .end((studentUpdateErr, studentUpdateRes) => {
  //       if (studentUpdateErr) {
  //         return done(studentUpdateErr);
  //       }
  //       (studentUpdateRes.body.student_id).should.equal(student.student_id);
  //       (studentUpdateRes.body.address).should.match('王曲');
  //       done();
  //     });
  //
  //   });
  // });
  // it('should be able to delete student', done => {
  //   this.timeout(10000);
  //   agent.post('/students')
  //   .send(student)
  //   .expect(200)
  //   .end((studentSaveErr, studentSaveRes) => {
  //     if (studentSaveErr) {
  //       return done(studentSaveErr);
  //     }
  //     agent.delete('/students/'+studentSaveRes.body._id)
  //     .send(student)
  //     .expect(200)
  //     .end((studentDeleteErr, studentDeleteRes) => {
  //       if (studentDeleteErr) {
  //         return done(studentDeleteErr);
  //       }
  //       (studentDeleteRes.body._id).should.equal(studentSaveRes.body._id);
  //       done();
  //     });
  //
  //   });
  // });
  //

  afterEach(function (done) {
    Group.remove().exec(done);
  });
});
