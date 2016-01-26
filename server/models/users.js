var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
	active : {type : Boolean, default: true},
	firstName : {type : String, default: ''},
	lastName : {type : String, default: ''},
	email : {type : String, default: ''},
	age : {type : Number, default: null},
	added : {type : Date, default: ''}
});
