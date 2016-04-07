import { getErrorMessage } from './core/errors.server.controllers';
import _ from 'lodash';
const mongoose = require('mongoose');
const Course = mongoose.model('Course');


export function create(req, res) {
  const course = new Course(req.body);
  course.save((err) => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.jsonp(course);
    }
  });
}
export function list(req, res) {
  Course.find({})
  .sort('-created')
  .populate('lesson_modules')
  .exec((err, courses) => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.jsonp(courses);
    }
  });
}
export function read(req, res) {
  // convert mongoose document to JSON
  const course = req.course ? req.course.toJSON() : {};
  res.json(course);
}

export function del(req, res) {
  const course = req.course;

  course.remove(err => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.json(course);
    }
  });
}

export function update(req, res) {
  let course = req.course;
  course = _.extend(course, req.body);
  course.save(err => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.json(course);
    }
  });
}
export function courseByID(req, res, next, id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({
      message: 'Course id is invalid',
    });
  }
  Course.findById(id)
  .exec((err, course) => {
    if (err) {
      next(err);
    } else if (!course) {
      res.status(404).send({
        message: 'No course with that identifier has been found',
      });
    }
    req.course = course; //eslint-disable-line
    next();
  });
}
