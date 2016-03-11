'use strict';
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	// errorHandler = require('./errors.server.controller'),
	Mark = mongoose.model('Mark'),
	Lclass = mongoose.model('Lclass'),
	Member = mongoose.model('Member'),
	Exam = mongoose.model('Exam');

	exports.create = function(req, res) {

		 var mark = new Mark(req.body);
		 mark.save(function(err,mark) {
			 if (err) {
				 return res.status(400).send({
					 message: err
				 });
			 } else {
				 res.redirect('/marklist');
			 }
		 });
	}
	exports.list = function(req, res, next) {
		Mark.find({})
			.sort('-created')
			//.populate('user', 'displayName')
			.exec(function(err, markes) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				req.markes = markes;
				next();
				// res.render('mark/mark_list',{markes:markes});
			}
		});
	};

	exports.findExamMembers = function(req, res, next){
		var examId = req.params.id;
		console.log(examId);
		Exam.findOne({_id:examId})
		.populate('exam_lclass')
		.exec(function(err,exam){
			req.exam = exam;
			Member.find({lclass:exam.exam_lclass})
			.populate('lclass')
			.exec(function(err,members){
				if (err) {
					return res.status(400).send({
						message: errorHandler.getErrorMessage(err)
					});
				} else {
					console.log(members);
					req.members = members;
					next();
					// res.render('mark/mark_list',{markes:markes});
				}
			});
		});
	}
