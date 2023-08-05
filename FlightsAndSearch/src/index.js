const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');

const server = async () => {

	const app = express();

	//middleware
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	app.listen(PORT, ()=> {
		console.log("server is started on :", PORT);
	})
}

server();