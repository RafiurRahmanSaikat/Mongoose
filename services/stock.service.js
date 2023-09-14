const Stock = require('../models/stock.model');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

exports.getStockService = async (filter) => {
	// const stocks = await Stock.find({})
	// 	.populate('productId')
	// 	.populate('brand.id')
	// 	.populate('store.id')
	// 	.populate('suppliedBy.id');
	// return stocks;

	const stocks = await Stock.aggregate([
		{ $match: { _id: new ObjectId('65004d26c1c411e55b70297e') } },
		{
			$lookup: {
				from: 'products',
				localField: 'productId',
				foreignField: '_id',
				as: 'productDetails',
			},
		},
		{ $unwind: '$productDetails' },
		{
			$lookup: {
				from: 'brands',
				localField: 'brand.id',
				foreignField: '_id',
				as: 'brandDetails',
			},
		},
		{ $unwind: '$brandDetails' },
		// {
		// 	$lookup: {
		// 		from: 'products',
		// 		localField: 'brand.products',
		// 		foreignField: '_id',
		// 		as: 'productsDetails',
		// 	},
		// },
		// { $unwind: '$productsDetails' },
		{
			$project: {
				_id: 1,
				name: 1,
				status: 1,
				category: 1,
				quantity: 1,
				products: 1,
				price: 1,
				unit: 1,
				imageURLs: 1,
				description: 1,
				brand: '$brandDetails',
				product: '$productDetails',
			},
		},
	]);
	return stocks;
};

exports.createAStockService = async (data) => {
	const result = await new Stock(data).save();
	return result;
};

exports.createManyStockService = async (data) => {
	const result = await Stock.insertMany(data);
	return result;
};
