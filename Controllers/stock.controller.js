const {
	getStockService,
	createAStockService,
	createManyStockService,
} = require('../services/stock.service');

exports.getAllStock = async (req, res, next) => {
	try {
		const result = await getStockService({});
		res.status(200).send({
			success: true,
			message: 'Successfully get all Stocks',
			data: result,
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: 'Failed to get all Stocks',
			error: error.message,
		});
	}
};

exports.createAStock = async (req, res, next) => {
	const data = req.body;
	console.log(data);

	try {
		const result = await createAStockService(req.body);
		res.status(200).send({
			success: true,
			message: 'Successfully Add the Stock',
			data: result,
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: 'Failed to Add the Stock',
			error: error.message,
		});
	}
};

exports.createManyStock = async (req, res, next) => {
	try {
		const result = await createManyStockService(req.body);
		res.status(200).send({
			success: true,
			message: 'Successfully Added All Stock',
			result: result,
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: 'Failed to add All Stock',
			error: error.message,
		});
	}
};
