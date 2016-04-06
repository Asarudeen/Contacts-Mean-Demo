var Contact = require('../models/contact');

module.exports.create = function(req,res){
	var contact = new Contact(req.body);
	contact.save(function(err,result){
		res.json(result);
	});
};

module.exports.list = function(req,res){

	Contact.find({},function(err,result){
		res.json(result);
	});
	/*Meetup.find({},function(err,result){
		res.json(result);
	});*/
};