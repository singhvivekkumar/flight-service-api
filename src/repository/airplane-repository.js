const { Airplane } = require('../models/airplane');

class AirplaneRepository {

	async createAirplane(data) {
		try {
			const airplane = await Airplane.create(data);
			return airplane;
		} catch (error) {
			console.log("-----Something is went wrong in Airplane repository-----");
			throw {error};
		}
	}

	async updateAirplane(data) {
		try {
			const airplane = await Airplane.update(data);
			return airplane;
		} catch (error) {
			console.log("-----Something is went wrong in Airplane repository-----");
			throw {error};
		}
	}

	async getAirplane(data) {
		try {
			const airplane = await Airplane.findByPk(data);
			return airplane;
		} catch (error) {
			console.log("-----Something is went wrong in Airplane repository-----");
			throw {error};
		}
	}

	async destroyAirplane(data) {
		try {
			const airplane = await Airplane.destroy(data);
			return airplane;
		} catch (error) {
			console.log("-----Something is went wrong in Airplane repository-----");
			throw {error};
		}
	}
}

module.exports = AirplaneRepository;