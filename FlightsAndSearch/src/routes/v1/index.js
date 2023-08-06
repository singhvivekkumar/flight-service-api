const express = require('express');
const cityControllers = require('../../controllers/city-controllers')

const router = express.Router();

router.post('/city', cityControllers.create);
router.patch('/city', cityControllers.update);
router.get('/city', cityControllers.get);
router.delete('/city', cityControllers.destroy);

module.exports = router;