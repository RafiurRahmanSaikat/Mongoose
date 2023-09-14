const Store = require('../models/store.model');

exports.getStoreService = async (filter) => {
	return await Store.find();
};

exports.createAStoreService = async (data) => {
	return await new Store(data).save();

	// const store = new Store(data)
	// const result = await store.save();
	// const result = await Store.create(data,{runValidators:true});
};
exports.createManyStoreService = async (data) => {
	return await Store.insertMany(data);
};
