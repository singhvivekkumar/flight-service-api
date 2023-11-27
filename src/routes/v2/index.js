const express = require('express');

const v1Router = express.Router();

const city = require('./city-router');
const flight = require('./flight-router');
const airport = require('./airport-router');

v1Router.use('/city', city);
v1Router.use('/flights', flight);
v1Router.use('/airports', airport);

module.exports = v1Router;

// // these are for flight
// router.post('/flights', FlightMiddleware.validateCreateFlight, flightController.create);
// router.patch('/flights/:id', flightController.update);
// router.get('/flights/:id', flightController.get);
// router.delete('/flights/:id', flightController.destroy);

// module.exports = router;