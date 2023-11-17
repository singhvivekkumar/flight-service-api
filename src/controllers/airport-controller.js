const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
	try {
		const response = await airportService.create(req.body);
		return res.status(201).json({
			data: response,
			message:"airport successfully created",
			success: true,
			err: {}
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			message: "Not able to create a airport",
			success: false,
			err: error
		})
	}
}

module.exports = {
	create
}