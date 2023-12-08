const { AirportRepository } = require('../repository/index');
const CrudService = require('./crud-service');

class AirportService extends CrudService {

	constructor() {
		super(AirportRepository);
		this.repository = new AirportRepository();
	}

	async getAirportByName(name) {
		try {
			const airport = await this.repository.getAllByName(name);
			console.log(airport)
			return airport;
		} catch (error) {
			console.log("something went wrong in getAirportByName() of airport-serivce")
			throw error;
		}
	}
}

module.exports = AirportService;