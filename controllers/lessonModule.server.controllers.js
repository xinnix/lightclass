import { getErrorMessage } from './core/errors.server.controllers';
import _ from 'lodash';
const mongoose = require('mongoose');
const LessonModule = mongoose.model('LessonModule');


export function create(req, res) {
  const lessonModule = new LessonModule(req.body);
  lessonModule.save((err) => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.jsonp(lessonModule);
    }
  });
}
export function list(req, res) {
  LessonModule.find({})
  .sort('-created')
  .populate('students')
  .exec((err, lessonModules) => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.jsonp(lessonModules);
    }
  });
}
export function read(req, res) {
  // convert mongoose document to JSON
  const lessonModule = req.lessonModule ? req.lessonModule.toJSON() : {};
  res.json(lessonModule);
}

export function del(req, res) {
  const lessonModule = req.lessonModule;

  lessonModule.remove(err => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.json(lessonModule);
    }
  });
}

export function update(req, res) {
  let lessonModule = req.lessonModule;
  lessonModule = _.extend(lessonModule, req.body);
  lessonModule.save(err => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.json(lessonModule);
    }
  });
}
export function lessonModuleByID(req, res, next, id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({
      message: 'LessonModule id is invalid',
    });
  }
  LessonModule.findById(id)
  .exec((err, lessonModule) => {
    if (err) {
      next(err);
    } else if (!lessonModule) {
      res.status(404).send({
        message: 'No LessonModule with that identifier has been found',
      });
    }
    req.lessonModule = lessonModule; //eslint-disable-line
    next();
  });
}
