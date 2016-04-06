import * as lessonModules from '../controllers/lessonModule.server.controllers.js';
const express = require('express');
/* eslint-disable*/
const router = express.Router();
/* eslint-enable*/


router.route('/')
.get(lessonModules.list)
.post(lessonModules.create);

router.route('/:lessonModuleId')
.get(lessonModules.read)
.put(lessonModules.update)
.delete(lessonModules.del);

router.param('lessonModuleId', lessonModules.lessonModuleByID);

export default router;
