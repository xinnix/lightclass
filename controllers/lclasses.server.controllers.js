'use strict';
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	// errorHandler = require('./errors.server.controller'),
	Lclass = mongoose.model('Lclass');

	exports.create = function(req, res) {

		 var lclass = new Lclass(req.body);
		 lclass.save(function(err,lclass) {
			 if (err) {
				 return res.status(400).send({
					 message: err
				 });
			 } else {
				 res.redirect('/lclasslist');
			 }
		 });
	}
	exports.list = function(req, res) {
		Lclass.find({})
			.sort('-created')
			//.populate('user', 'displayName')
			.exec(function(err, lclasses) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.render('lclass/lclass_list',{lclasses:lclasses});
			}
		});
	};
