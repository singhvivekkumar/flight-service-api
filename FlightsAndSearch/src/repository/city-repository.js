const { Op } = require('sequelize');
const { City } = require('../models/index');
// const city = require('../models/city');

class CityRepository {
	async createCity({name}) {
		try {
			// city is promise means it may return resolve or reject 
			// resolve return city otherwise catch error
			const city = await City.create({name});
			return city;
		} catch (error) {
			console.log("-------Something went wrong in repo---------");
			throw{error};
		}
	}

	async deleteCity(cityId) {
		try {
			await City.destroy({
				where: {
					id: cityId
				}
			})
		} catch (error) {
			console.log("-------Something went wrong---------");
			throw{error};
		}
	}

	async updateCity(cityId, data) {
		try {
			const city = await City.update( data, {
				where: {
					id: cityId
				}
			});
			// console.log(cityId, data);
			// const city = await City.findByPk(cityId);
			// city.name = data.name;
			// await city.save();
			return city;
		} catch (error) {
			console.log("-------Something went wrong---------");
			throw{error};
		}
	}

	async getCity(cityId) {
		try {
			const city = await City.findByPk(cityId);
			return city;
		} catch (error) {
			console.log("-------Something went wrong---------");
			throw{error};
		}
	}

	async getAllCity(fliter) {
		try {
			if (fliter.name) {
				const cities = await City.findAll({
					where:{
						name: {
							[Op.startsWith]: fliter.name
						}
					}
				});
				return cities;
			}
			const cities = await City.findAll();
			return cities;
		} catch (error) {
			console.log("-------Something went wrong---------");
			throw{error};
		}
	}
	
}

module.exports = CityRepository;