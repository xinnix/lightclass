import * as students from '../controllers/student.server.controllers.js';
const express = require('express');
/* eslint-disable*/
const router = express.Router();
/* eslint-enable*/


router.route('/')
.get(students.list)
.post(students.create);

router.route('/:studentId')
.get(students.read)
.put(students.update)
.delete(students.del);

router.param('studentId', students.studentByID);

export default router;
