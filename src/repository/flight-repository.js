const { Op } = require('sequelize');
const { Flights } = require('../models/index')

class FlightRepository {

	#createFilter(data) {
		let filter = {};
		if (data.arrivalAirportId) {
			filter.arrivalAirportId = data.arrivalAirportId;
		}
		if (data.departureAirportId) {
			filter.departureAirportId = data.departureAirportId;
		}
		
		let priceFilter = [];
		if (data.minPrice) {
			// Object.assign(filter, {
			// 	price: {
			// 		[Op.gte]: data.minPrice
			// 	}
			// });
			priceFilter.push({
				price: {
					[Op.gte] : data.minPrice
				}
			});
		}
		if (data.maxPrice) {
			// Object.assign(filter, {
			// 	price: {
			// 		[Op.lte]: data.maxPrice
			// 	}
			// });
			priceFilter.push({
				price: {
					[Op.lte] : data.maxPrice
				}
			})
		}
		// if (data.minPrice && data.maxPrice) {
		// 	Object.assign(filter, {
		// 		[Op.and]: [
		// 			{ price: { [Op.lte]: data.maxPrice}},
		// 			{ price: { [Op.gte]: data.minPrice}}
		// 		]
		// 	});
		// }
		Object.assign(filter, {[Op.and]: priceFilter});

		console.log(filter);
		return filter;
	}

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
			const flightObject = await this.#createFilter(filter);
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