import * as courses from '../controllers/course.server.controllers.js';
const express = require('express');
/* eslint-disable*/
const router = express.Router();
/* eslint-enable*/


router.route('/')
.get(courses.list)
.post(courses.create);

router.route('/:courseId')
.get(courses.read)
.put(courses.update)
.delete(courses.del);

router.param('courseId', courses.courseByID);

export default router;
