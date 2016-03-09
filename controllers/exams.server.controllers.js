'use strict';
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	// errorHandler = require('./errors.server.controller'),
	Exam = mongoose.model('Exam');

	 exports.create = function(req, res) {

		 var exam = new Exam(req.body);
		 exam.save(function(err,exam) {
			 if (err) {
				 return res.status(400).send({
					 message: err
				 });
			 } else {
				 res.redirect('/examlist');
			 }
		 });
	 }
	exports.list = function(req, res) {
		Exam.find({})
			.sort('-created')
			//.populate('user', 'displayName')
			.exec(function(err, exams) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
        console.log(exams);
				res.render('examlist',{exams:exams});
			}
		});
	};
