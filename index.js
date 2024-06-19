const express = require('express');
const bodyParser = require('body-parser');

// custom file
const { PORT } = require('./config/serverConfig');
const ApiRoute = require('./routes/index');
// const db = require('./models/index');

// this is for clearner code 
const server = async () => {

	const app = express();

	//middleware for the app
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	//route the app
	app.use('/search/api', ApiRoute);
	app.use('/api', ApiRoute);

	//starting point
	app.listen(PORT, async ()=> {
		console.log("server is started on ::::", PORT);

		//synchronization
		// db.sequelize.sync({ alter: true});
	})
}

server();