const { Flights } = require('../models/index')

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

	async getFlight(flightId) {
		try {
			const flight = await Flights.findByPk(flightId);
			return flight;
		} catch (error) {
			console.log("-----Something is went wrong in flight repository-----");
			throw {error};
		}
	}

	async getAllFlights(filter) {
		try {
			const flightObject = await this.createFilter(filter);
			const flight = await Flights.findAll({
				where: flightObject
			})
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