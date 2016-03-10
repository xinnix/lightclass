'use strict';
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	// errorHandler = require('./errors.server.controller'),
	Lclass = mongoose.model('Lclass'),
	Member = mongoose.model('Member'),
	_ = require('lodash');
		// errorHandler = require('./errors.server.controller'),


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
			.populate('lclass')
			.exec(function(err, members) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.render('member/member_list',{members:members});
			}
		});
	};
	exports.signupInit = function(req,res){
		Lclass.find({})
      .sort('-created')
      //.populate('user', 'displayName')
      .exec(function(err, lclasses) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
				console.log(lclasses);
        res.render('member/member_create',{lclasses:lclasses});
      }
    });

	}
