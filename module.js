const 	mongoose = require('mongoose'),
		moviesSchema = require('./moviesMlab');

var		consts = require('./consts'),
		conn = mongoose.connection;

mongoose.Promise = global.Promise;
mongoose.connect(consts.MLAB_KEY);
User = conn.model('movies', moviesSchema);

conn.on('error', 
	(err)=> {
		console.log('connection error: ${err}');
	});

conn.once('open',
	()=> {
		console.log('Connected');

	exports.getAllMovies = function() {
		return new Promise( (resolve, reject ) => {
			User.find({},
				(err, movies) => {
					if(err) console.log(`Error: ${err}`);
					resolve(movies);
				})
		})
	}

	exports.getMovieById = function(un) {
		return new Promise( (resolve, reject ) => {
			User.find({id:un},
			(err, movies) => {
				if(err) console.log(`Error: ${err}`);
				resolve(movies);
			})
		})
	}

	exports.getMovieByPriceAndOrders = function(price,orders) {
		return new Promise( (resolve, reject ) => {
			User.find({price:price, orders:{$gt:orders}},
				(err, movies) => {
					if(err) console.log(`Error: ${err}`);
					resolve(movies);
				})
		})
	}
});