import * as lessons from '../controllers/lesson.server.controllers.js';
const express = require('express');
/* eslint-disable*/
const router = express.Router();
/* eslint-enable*/


router.route('/')
.get(lessons.list)
.post(lessons.create);

router.route('/:lessonId')
.get(lessons.read)
.put(lessons.update)
.delete(lessons.del);

router.param('lessonId', lessons.lessonByID);

export default router;
