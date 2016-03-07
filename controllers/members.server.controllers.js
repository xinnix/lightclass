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
  			res.jsonp(member);
  		}
  	});
  };
