var mongoose = require('mongoose'),

	schema = mongoose.Schema,
	moviesSchema = new schema({
		id: {type:Number, required:true},
		name: {type:String, index:1, required:true, unique:true},
		year: Number,
		runtime: {type:String, required:true},
		category: [String],
		price: Number,
		orders: Number
	}, {collection:'movies'});
	
module.exports = moviesSchema;