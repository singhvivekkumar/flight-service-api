const { SearchService } = require('../services/index');

const searchService = new SearchService();

const getAllFlights = async ( req , res ) => {
	try {
		const flight = await searchService.searchFlight(req.query);
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



module.exports = {
	getAllFlights
}