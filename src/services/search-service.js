const { AirportRepository} = require('../repository/index');
const AirportService = require('./airport-service');
const FlightService = require('./flight-service');

class SearchService {

	constructor () {
		// this.flightRepository = new FlightRepository();
		this.airportService = new AirportService();
		this.flightService = new FlightService();
	}

	async searchFlight(data) {
		try {
			let flights = null;
			if ( data.departureAirport && data.arrivalAirport ) {
				const departureAirport = await this.airportService.getAirportByName(data.departureAirport)
				const arrivalAirport = await this.airportService.getAirportByName(data.arrivalAirport)
				console.log("airport id 1 : ", departureAirport.id, "airport id 2 : ", arrivalAirport.id);
				const payload = {
					departureAirportId: departureAirport.id,
					arrivalAirportId: arrivalAirport.id
				}
				flights = await this.flightService.getAllFlightData(payload);
			} else {
				throw { error : 'please provide both arrival airport and departure airport'};
			}
			return flights;
		} catch (error) {
			console.log("<<<<<something went wrong in flight service layer>>>>>");
			throw {error}
		}
	}
}

module.exports = SearchService;