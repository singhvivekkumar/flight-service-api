const express = require('express');
const cityControllers = require('../../controllers/city-controllers')

const router = express.Router();

router.post('/city', cityControllers.create);
router.patch('/city/:id', cityControllers.update);
router.get('/city/:id', cityControllers.get);
router.delete('/city/:id', cityControllers.destroy);

module.exports = router;