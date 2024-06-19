const express = require('express');

const v2Router = express.Router();

const flights = require('../../controllers/search-controller');

v2Router.get('/flights', flights.getAllFlights);

module.exports = v2Router;