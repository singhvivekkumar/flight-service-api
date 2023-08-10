const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async ( req , res ) => {
	try {
		const flight = await flightService.createFlight(req.body);
		return res.status(201).json({
			data: flight,
			success: true,
			err: {},
			message: "Successfully created a flight"
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			err: error,
			message: "Not able to create a flight"
		})
	}
}

const update = async ( req , res ) => {
	try {
		const flight = await flightService.updateFlight(req.body);
		return res.status(200).json({
			data: flight,
			success: true,
			err: {},
			message: "Successfully update a flight"
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			err: error,
			message: "Not able to update a flight"
		})
	}
}

const get = async ( req , res ) => {
	try {
		const flight = await flightService.getFlight(req.body);
		return res.status(200).json({
			data: flight,
			success: true,
			err: {},
			message: "Successfully get a flight"
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			err: error,
			message: "Not able to get a flight"
		})
	}
}

const destroy = async ( req , res ) => {
	try {
		const flight = await flightService.destroyFlight(req.body);
		return res.status(200).json({
			data: flight,
			success: true,
			err: {},
			message: "Successfully destory a flight"
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			err: error,
			message: "Not able to destory a flight"
		})
	}
}

module.exports = {
	create,
	update,
	get,
	destroy
}