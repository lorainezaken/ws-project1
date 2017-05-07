const	express = require('express'),
		bodyParser = require('body-parser'),
		mod = require('./module.js'),
		app = express(),
		port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/getAllMovies',(req,res)=>{
	res.json(mod.getAllMovies());
});
app.post('/getMovieById/',(req,res)=>{
	var un = req.body.id;
	var data = mod.getMovieById(un);
	if(data == 0){
		res.status(200).json({"err":"movie not found"});
	}
	else{
		res.status(200).json(data);
	}
});
app.post('/getMovieByPriceAndOrders/',(req,res)=>{
	var price = req.body.price,
		orders = req.body.orders,
		data = mod.getMovieByPriceAndOrders(price,orders);

	if(data == 0) {
		res.status(200).json({"err":"movies not found"});
	}
	else {
		res.status(200).json(data);
	}
});
app.all('*', (req,res) => {
	res.json({"Error": "Page not found 404."});
});
app.listen(port, ()=> {
	console.log(`listening on port ${port}`);
});
