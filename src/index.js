const express = require('express');
const bodyParser = require('body-parser');

// custom file
const { PORT } = require('./config/serverConfig');
// const CityRepository = require('./repository/city-repository');
const ApiRoute = require('./routes/index');
const db = require('./models/index');
const { City , Airport } = require('./models/index');

// this is for clearner code 
const server = async () => {

	const app = express();

	//middleware for the app
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	//route the app
	app.use('/api', ApiRoute);

	//starting point
	app.listen(PORT, async ()=> {
		console.log("server is started on ::::", PORT);

		//synchronization
		// db.sequelize.sync({ alter: true});
		// const city = await City.findOne({
		// 	where: {
		// 		id: 9
		// 	}
		// });
		// console.log(city);
		
	})
}

server();