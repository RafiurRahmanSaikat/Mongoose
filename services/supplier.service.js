const Supplier = require('../models/supplier.model');
const Brand = require('../models/brand.model');

exports.getsupplierService = async (filter) => {
	const suppliers = await Supplier.find();
	return suppliers;
};

exports.createAsupplierService = async (data) => {
	const result = await Supplier.create(data);
	try {
		const BarndID = data?.brand?.id;

		const saveSupplierInfotoBrand = await Brand.updateOne(
			{ _id: BarndID },
			{
				$push: {
					suppliers: {
						name: data?.name,
						contactNumber: data?.contactNumber,
						id: result._id,
					},
				},
			},
			{ runValidators: true },
		);
		console.log({ saveSupplierInfotoBrand });
		return result;
	} catch (error) {
		console.error(error);
	}
};
exports.createManySupplierService = async (data) => {
	try {
		const result = await Supplier.insertMany(data);
		return result;
	} catch (error) {
		res.status(400).send({
			success: false,
			message: 'Failed to Add All Supplier',
			error,
		});
	}
};
