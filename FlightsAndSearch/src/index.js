const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const CityRepository = require('./repository/city-repository')

const server = async () => {

	const app = express();

	//middleware
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	app.listen(PORT, ()=> {
		console.log("server is started on :", PORT);
		const repo = new CityRepository();
		repo.deleteCity(3);
	})
}

server();