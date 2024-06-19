const { CityService } = require('../services/index');

const cityService = new CityService();

//	API
//	POST -> /city/:id
const create = async (req, res) => {
	try {
		const city = await cityService.createCity(req.body);
		return res.status(201).json({
			data: city,
			success: true,
			message: "Successfully created a city",
			err: {}
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able to created a city",
			err: error
		})
	}
}

// PATCH -> /city/:id -> req.body
const update = async (req, res) => {
	try {
		const response = await cityService.updateCity(req.params.id, req.body);
		return res.status(200).json({
			data: response,
			success: true,
			message: "Successfully update the city",
			err: {}
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able to update the city",
			err: error
		})
	}
}

// 	GET RESTs -> /city/:id
const get = async (req, res) => {
	try {
		const city = await cityService.getCity(req.params.id);
		return res.status(200).json({
			data: city,
			success: true,
			message: "Successfully get the city",
			err: {}
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able to get the city",
			err: error
		})
	}
}

// 	DELETE RESTs -> /city/:id
const destroy = async (req, res) => {
	try {
		const response = await cityService.deleteCity(req.params.id);
		return res.status(200).json({
			data: response,
			success: true,
			message: "Successfully delete a city",
			err: {}
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able to delete a city",
			err: error
		})
	}
}

const getAll = async ( req, res) => {
	try {
		const cities = await cityService.getAllCity(req.query);
		return res.status(200).json({
			data: cities,
			success: true,
			message: "Successfully get all cities",
			err: {}
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Not able get all cities",
			err: error
		})
	}
}

module.exports = { 
	create, 
	update, 
	get, 
	destroy,
	getAll
}