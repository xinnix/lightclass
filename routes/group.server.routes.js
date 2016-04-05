import * as groups from '../controllers/group.server.controllers.js';
const express = require('express');
/* eslint-disable*/
const router = express.Router();
/* eslint-enable*/


router.route('/')
.get(groups.list)
.post(groups.create);

router.route('/:groupId')
.get(groups.read)
.put(groups.update)
.delete(groups.del);

router.param('groupId', groups.groupByID);

export default router;
