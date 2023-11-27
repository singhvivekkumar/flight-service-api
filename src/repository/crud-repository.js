class CrudRepository {

	constructor(model) {
		this.model = model;
	}

	async create(data) {
		try {
			const result = await this.model.create(data);
			return result;
		} catch (error) {
			console.log('something went wront in curd model');
			throw error
		}
	}

	async destory(modelId) {
		try {
			const result = await this.model.create({
				where: {
					id: modelId
				}
			});
			return true;
		} catch (error) {
			console.log('something went wront in curd model');
			throw error
		}
	}

	async get(modelId) {
		try {
			const response = await this.model.findByPk(modelId);
			return response;
		} catch (error) {
			console.log('something went wront in curd model');
			throw error
		}
	}

	async getAll() {
		try {
			const result = await this.model.findAll();
			return result;
		} catch (error) {
			console.log('something went wront in curd model');
			throw error
		}
	}

	async getAllByName(name) {
		try {
			const result = await this.model.findAll({
				where:{
					name: {
						[Op.substring]: name
					}
				}
			});
			return result;
		} catch (error) {
			console.log('something went wront in curd model');
			throw error
		}
	}

	async update(modelId, data) {
		try {
			const result = await this.model.update(data, {
				where: {
					id: modelId
				}
			});
			return result;
		} catch (error) {
			console.log('something went wront in curd model');
			throw error
		}
	}
}

module.exports = CrudRepository;