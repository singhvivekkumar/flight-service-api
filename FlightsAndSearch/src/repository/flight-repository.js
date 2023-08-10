const { Flights } = require('../models/flights')

class FlightRepository {

	async createFlight(data) {
		try {
			const flight = await Flights.create(data);
			return flight;
		} catch (error) {
			console.log("-----Something is went wrong in flight repository-----");
			throw {error};
		}
	}

	async updateFlight(data) {
		try {
			const flight = await Flights.update(data);
			return flight;
		} catch (error) {
			console.log("-----Something is went wrong in flight repository-----");
			throw {error};
		}
	}

	async getFlight(data) {
		try {
			const flight = await Flights.findByPk(data);
			return flight;
		} catch (error) {
			console.log("-----Something is went wrong in flight repository-----");
			throw {error};
		}
	}

	async destroyFlight(data) {
		try {
			const flight = await Flights.destroy(data);
			return flight;
		} catch (error) {
			console.log("-----Something is went wrong in flight repository-----");
			throw {error};
		}
	}
}

module.exports = FlightRepository;