const express = require('express');
const cityControllers = require('../../controllers/city-controllers')

const CityRouter = express.Router();

// CityRouter.post('/city', cityControllers.create);
// CityRouter.patch('/city/:id', cityControllers.update);
// CityRouter.get('/city/:id', cityControllers.get);
// CityRouter.get('/city', cityControllers.getAll);
// CityRouter.delete('/city/:id', cityControllers.destroy);

CityRouter.post('/', cityControllers.create);
CityRouter.patch('/:id', cityControllers.update);
CityRouter.get('/:id', cityControllers.get);
CityRouter.get('/', cityControllers.getAll);
CityRouter.delete('/:id', cityControllers.destroy);

module.exports = CityRouter; 