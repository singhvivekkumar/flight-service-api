const { ClientErrorCode } = require('../utils/error-code')
// actually it is a contract of API

const validateCreateFlight = ( req, res, next ) => {
	if (
		!req.body.flightNumber ||
		!req.body.airplaneId ||
		!req.body.departureAirportId ||
		!req.body.arrivlAirportId ||
		!req.body.arrivalTime ||
		!req.body.departureTime ||
		!req.body.price 
		) {
		// if any of the body params is missing we come
		return res.status(ClientErrorCode.BAD_REQUEST).json({
			data: {},
			success: false,
			message:  'Invalid request body for create flight',
			err: 'Missing mandatory properties to create a flight'
		})
	}

	next();
}

module.exports = {
	validateCreateFlight
}