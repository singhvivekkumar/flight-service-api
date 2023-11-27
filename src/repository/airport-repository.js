const CrudRepository = require("./crud-repository");
const { Airport } = require('../models/index');
const { Op } = require('sequelize');

class AirportRepository extends CrudRepository {

	constructor(){
		super(Airport);
	}

	async getAllByName(name) {
		try {
			const airport = await Airport.findOne({
				where:{
					name: {
						[Op.substring]: name
					}
				}
			});
			return airport;
		} catch (error) {
			console.log('something went wront in curd model');
			throw error
		}
	}
}

module.exports = AirportRepository;