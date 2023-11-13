const express = require('express');

const router = express.Router();

const v1ApiRoutes = require('./v1/index');
// const v2ApiRoute = require('./v2/index')

router.use('/v1', v1ApiRoutes);
// router.use('/v2', v2ApiRoute);

module.exports = router;