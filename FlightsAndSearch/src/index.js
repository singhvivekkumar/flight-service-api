const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const CityRepository = require('./repository/city-repository')
const ApiRoute = require('./routes/index')

const server = async () => {

	const app = express();

	//middleware
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	//route the app
	app.use('/api', ApiRoute);

	//starting point
	app.listen(PORT, ()=> {
		console.log("server is started on ::::", PORT);
	})
}

server();