import { getErrorMessage } from './core/errors.server.controllers';
import _ from 'lodash';
const mongoose = require('mongoose');
const Group = mongoose.model('Group');
const Student = mongoose.model('Student');


export function create(req, res) {
  const group = new Group(req.body);
  group.save((err) => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.jsonp(group);
    }
  });
}
export function list(req, res) {
  Group.find({})
  .sort('-created')
  .populate('students')
  .exec((err, groups) => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.jsonp(groups);
    }
  });
}
export function read(req, res) {
  // convert mongoose document to JSON
  const group = req.group ? req.group.toJSON() : {};
  res.json(group);
}

export function del(req, res) {
  const group = req.group;

  group.remove(err => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.json(group);
    }
  });
}

export function update(req, res) {
  let group = req.group;
  group = _.extend(group,req.body);
  group.save(err => {
    if (err) {
      res.status(400).send({
        message: getErrorMessage(err),
      });
    } else {
      res.json(group);
    }
  });
}
export function groupByID(req, res, next, id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({
      message: 'Groupid is invalid',
    });
  }
  Group.findById(id)
  .exec((err, group) => {
    if (err) {
      next(err);
    } else if (!group) {
      res.status(404).send({
        message: 'No article with that identifier has been found',
      });
    }
    req.group = group; //eslint-disable-line
    next();
  });
}
