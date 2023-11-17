const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async ( req , res ) => {
	try {
		const flightRequestData = {
			// It always good to select which data passes to our service layer
			flightNumber: req.body.flightNumber,
			airplaneId: req.body.airplaneId,
			departureAirportId: req.body.departureAirportId,
			arrivalAirportId: req.body.arrivalAirportId,
			arrivalTime: req.body.arrivalTime,
			departureTime: req.body.departureTime,
			price: req.body.price
		}
		const flight = await flightService.createFlight(flightRequestData);
		console.log(flight)
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
		const flight = await flightService.getFlight(req.params.id);
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

const getAll = async ( req , res ) => {
	try {
		const flight = await flightService.getFlightAllData(req.query);
		return res.status(200).json({
			data: flight,
			success: true,
			err: {},
			message: "Successfully fetched all flights"
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			err: error,
			message: "Not able to fetched flights"
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
	getAll,
	destroy
}