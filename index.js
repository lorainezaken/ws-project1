const	express = require('express'),
		bodyParser = require('body-parser'),
		mod = require('./module.js'),
		app = express(),
		port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', express.static('api'));

app.get('/getAllMovies',(req,res)=>{
	mod.getAllMovies().then(
		(movies) => {
	        if(!movies.length)
	        	res.send({"Error":"No data returned."})
	        else
	        	res.json(movies);
		}, (error) => {
		    console.log(error);
	    });
});
app.post('/getMovieById/',(req,res)=>{
	var un = req.body.id;
	mod.getMovieById(un).then(
		(movies) => {
	        if(!movies.length)
	        	res.send({"Error":"No data returned."})
	        else
	        	res.json(movies);
		}, (error) => {
		    console.log(error);
	    });
});
app.post('/getMovieByPriceAndOrders/',(req,res)=>{
	var price = req.body.price,
		orders = req.body.orders;

	mod.getMovieByPriceAndOrders(price,orders).then(
		(movies) => {
	        if(!movies.length)
	        	res.send({"Error":"No data returned."})
	        else
	        	res.json(movies);
		}, (error) => {
		    console.log(error);
	    });
});
app.all('*', (req,res) => {
	res.json({"Error": "Page not found 404."});
});
app.listen(port, ()=> {
	console.log(`listening on port ${port}`);
});
