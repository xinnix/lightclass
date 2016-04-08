import { getErrorMessage } from './core/errors.server.controllers';
import _ from 'lodash';
const mongoose = require('mongoose');
const Lesson = mongoose.model('Lesson');


export function create(req, res) {
  const lesson = new Lesson(req.body);
  lesson.save((err) => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.jsonp(lesson);
    }
  });
}
export function list(req, res) {
  Lesson.find({})
  .sort('-created')
  .populate('lesson_module')
  .populate('group')
  .exec((err, lessons) => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.jsonp(lessons);
    }
  });
}
export function read(req, res) {
  // convert mongoose document to JSON
  const lesson = req.lesson ? req.lesson.toJSON() : {};
  res.json(lesson);
}

export function del(req, res) {
  const lesson = req.lesson;

  lesson.remove(err => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.json(lesson);
    }
  });
}

export function update(req, res) {
  let lesson = req.lesson;
  lesson = _.extend(lesson, req.body);
  lesson.save(err => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.json(lesson);
    }
  });
}
export function lessonByID(req, res, next, id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({
      message: 'Lesson id is invalid',
    });
  }
  Lesson.findById(id)
  .exec((err, lesson) => {
    if (err) {
      next(err);
    } else if (!lesson) {
      res.status(404).send({
        message: 'No lesson with that identifier has been found',
      });
    }
    req.lesson = lesson; //eslint-disable-line
    next();
  });
}
// function createLessonsByGroup(group){
// }
