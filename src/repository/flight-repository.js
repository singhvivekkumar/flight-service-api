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

		let dateFilter = [];
		if (data.departureTime) {
			dateFilter.push({
				departureTime: {
					[Op.lte]: data.departureTime
				}
			});
			dateFilter.push({
				departureTime: {
					[Op.gte]: new Date().toISOString()
				}
			});
		}
		Object.assign(filter, {[Op.and]: dateFilter});
		
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
		// Object.assign(filter, {[Op.and]: priceFilter});

		console.log("dateFilter",dateFilter);
		console.log("priceFliter",priceFilter);
		console.log("filter",filter);
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
			console.log("flightObject",flightObject);
			const flight = await Flights.findAll({
				where: flightObject
			})
			return flight;
		} catch (error) {
			console.log("-----Something is went wrong in flight repository-----");
			throw {error};
		}
	}

	async updateFlights(flightId, data) {
		try {
			console.log(flightId, data)
			await Flights.update(data,{
				where:{
					id: flightId
				}
			});
			return true;
		} catch (error) {
			console.log("-----Something is went wrong in flight repository while updating-----");
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