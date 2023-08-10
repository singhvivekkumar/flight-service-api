const express = require('express');
const flightController = require('../../controllers/flight-controller')

const flightRouter = express.Router();

flightRouter.post('/flight', flightController.create);
flightRouter.patch('/flight/:id', flightController.update);
flightRouter.get('/flight/:id', flightController.get);
flightRouter.delete('/flight/:id', flightController.destroy);

module.exports = flightRouter;