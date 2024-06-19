const express = require('express');

const v1Router = express.Router();

const city = require('./city-router');
const flight = require('./flight-router');
const airport = require('./airport-router');

v1Router.use('/cities', city);
v1Router.use('/flights', flight);
v1Router.use('/airports', airport);

module.exports = v1Router;

// module.exports = {
// 	'/city': require('./city-router'),
// 	'/flight': require('./flight-router')
// }

// const express = require('express');
// const cityController = require('../../controllers/city-controllers');
// const flightController = require('../../controllers/flight-controller');
// const { FlightMiddleware } = require('../../middlewares/index')
// const router = express.Router();

// // these are for city
// router.post('/city', cityController.create);
// router.patch('/city/:id', cityController.update);
// router.get('/city/:id', cityController.get);
// router.get('/city', cityController.getAll);
// router.delete('/city/:id', cityController.destroy);

// // these are for flight
// router.post('/flights', FlightMiddleware.validateCreateFlight, flightController.create);
// router.patch('/flights/:id', flightController.update);
// router.get('/flights/:id', flightController.get);
// router.delete('/flights/:id', flightController.destroy);

// module.exports = router;