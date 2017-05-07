const data = require("./data/buymovies.json");

exports.getAllMovies = function() {
	return data;
}

exports.getMovieById = function(un) {
	let foundMovie = false;
	for(let i in data.movies){
		var movie = data.movies[i];
		if(movie.id == un){
			console.log(`${data.movies[i].name} has been found.`);
			foundMovie = true;
			return movie;
		}
	}
	return 0;
}

exports.getMovieByPriceAndOrders = function(price,orders) {
	var	dataReturn = '[';

	let dataFound = false;

	for(let i in data.movies){
		var movie = data.movies[i];
		if(movie.price == price && movie.orders >= orders){
			console.log(`${data.movies[i].name} has been found.`);
			dataFound = true;
			dataReturn += JSON.stringify(movie);
			dataReturn += `,`;
		}
	}
	if(!dataFound){
		return 0;
	}
	else {
		dataReturn = dataReturn.substr(0,dataReturn.length-1);
		dataReturn += ']';
		dataReturn = JSON.parse(dataReturn);
		return dataReturn;
	}
}