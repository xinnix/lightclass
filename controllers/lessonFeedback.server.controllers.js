import { getErrorMessage } from './core/errors.server.controllers';
import _ from 'lodash';
const mongoose = require('mongoose');
const LessonFeedback = mongoose.model('LessonFeedback');


export function create(req, res) {
  const lessonFeedback = new LessonFeedback(req.body);
  lessonFeedback.save((err) => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.jsonp(lessonFeedback);
    }
  });
}
export function list(req, res) {
  LessonFeedback.find({})
  .sort('-created')
  .populate('lesson')
  .populate('student')
  .exec((err, lessonFeedbacks) => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.jsonp(lessonFeedbacks);
    }
  });
}
export function read(req, res) {
  // convert mongoose document to JSON
  const lessonFeedback = req.lessonFeedback ? req.lessonFeedback.toJSON() : {};
  res.json(lessonFeedback);
}

export function del(req, res) {
  const lessonFeedback = req.lessonFeedback;

  lessonFeedback.remove(err => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.json(lessonFeedback);
    }
  });
}

export function update(req, res) {
  let lessonFeedback = req.lessonFeedback;
  lessonFeedback = _.extend(lessonFeedback, req.body);
  lessonFeedback.save(err => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.json(lessonFeedback);
    }
  });
}
export function lessonFeedbackByID(req, res, next, id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({
      message: 'LessonFeedback id is invalid',
    });
  }
  LessonFeedback.findById(id)
  .exec((err, lessonFeedback) => {
    if (err) {
      next(err);
    } else if (!lessonFeedback) {
      res.status(404).send({
        message: 'No lessonFeedback with that identifier has been found',
      });
    }
    req.lessonFeedback = lessonFeedback; //eslint-disable-line
    next();
  });
}
// function createLessonFeedbacksByGroup(group){
// }
