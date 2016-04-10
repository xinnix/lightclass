import * as lessonFeedbacks from '../controllers/lessonFeedback.server.controllers.js';
const express = require('express');
/* eslint-disable*/
const router = express.Router();
/* eslint-enable*/


router.route('/')
.get(lessonFeedbacks.list)
.post(lessonFeedbacks.create);

router.route('/:lessonFeedbackId')
.get(lessonFeedbacks.read)
.put(lessonFeedbacks.update)
.delete(lessonFeedbacks.del);

router.param('lessonFeedbackId', lessonFeedbacks.lessonFeedbackByID);

export default router;
