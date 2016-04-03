import { getErrorMessage } from './core/errors.server.controllers';

const mongoose = require('mongoose');
const Student = mongoose.model('Student');


export function create(req, res) {
  const student = new Student(req.body);
  student.save((err) => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.jsonp(student);
    }
  });
}
export function list(req, res) {
  Student.find({})
  .sort('-created')
  .exec((err, students) => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.jsonp(students);
      // res.render('lclass/lclass_list',{lclasses:lclasses});
    }
  });
}
export function read(req, res) {
  // convert mongoose document to JSON
  const student = req.student ? req.student.toJSON() : {};
  res.json(student);
}

export function del(req, res) {
  const student = req.student;

  student.remove(err => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.json(student);
    }
  });
}

export function update(req, res) {
  const student = req.student;

  student.save(err => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.json(student);
    }
  });
}
export function studentByID(req, res, next, id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({
      message: 'Studentid is invalid',
    });
  }
  Student.findById(id).exec((err, student) => {
    if (err) {
      next(err);
    } else if (!student) {
      res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }
    req.student = student; //eslint-disable-line
    next();
  });
}
