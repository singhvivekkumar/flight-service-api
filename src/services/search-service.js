const { AirportRepository} = require('../repository/index');
const FlightService = require('./flight-service');

class SearchService {

	constructor () {
		// this.flightRepository = new FlightRepository();
		this.airportRepository = new AirportRepository();
		this.flightService = new FlightService();
	}

	async searchFlight(data) {
		try {
			let flights = null;
			if ( data.departureAirport && data.arrivalAirport ) {
				const departureAirport = await this.airportRepository.getAllByName(data.departureAirport);
				const arrivalAirport = await this.airportRepository.getAllByName(data.arrivalAirport);
				console.log("done", departureAirport.id, arrivalAirport.id);
				const payload = {
					departureAirportId: departureAirport.id,
					arrivalAirportId: arrivalAirport.id
				}
				flights = await this.flightService.getAllFlightData(payload)
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