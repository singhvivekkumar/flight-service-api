const express = require('express');
const cityControllers = require('../../controllers/city-controllers')

const CityRouter = express.Router();

CityRouter.post('/', cityControllers.create);
CityRouter.patch('/:id', cityControllers.update);
CityRouter.get('/:id', cityControllers.get);
CityRouter.get('/', cityControllers.getAll);
CityRouter.delete('/:id', cityControllers.destroy);

module.exports = CityRouter; 