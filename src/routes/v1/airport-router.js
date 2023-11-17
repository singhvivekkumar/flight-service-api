const express = require('express');
const airportController = require('../../controllers/airport-controller');

const airportRouter = express.Router();

airportRouter.post('/', airportController.create);

module.exports = airportRouter;