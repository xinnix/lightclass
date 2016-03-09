'use strict';
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	// errorHandler = require('./errors.server.controller'),
	Member = mongoose.model('Member'),
	_ = require('lodash');

  /**
   * Create a Member
   */
	 exports.create = function(req, res) {

		 var member = new Member(req.body);
		 member.save(function(err,member) {
			 if (err) {
				 return res.status(400).send({
					 message: err
				 });
			 } else {
				 res.redirect('/memberlist');
			 }
		 });
	 }
	exports.list = function(req, res) {
		Member.find({})
			.sort('-created')
			//.populate('user', 'displayName')
			.exec(function(err, members) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.render('memberlist',{members:members});
			}
		});
	};
