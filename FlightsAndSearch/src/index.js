const express = require('express');

const { PORT } = require('./config/serverConfig');

const server = async () => {

	const app = express();

	app.listen(PORT, ()=> {
		console.log("server is started on :", PORT);
	})
}

server();