const Product = require('../models/product.model');
const Brand = require('../models/brand.model');

exports.getProductService = async (filter, queries) => {
	const result = await Product.find(filter)
		.populate('brand.id')
		.skip(queries.skip)
		.limit(queries.limit)
		.sort(queries.sortBy)
		.select(queries.selectFields);

	console.log({ filter });

	return result;
};

exports.createManyProductServices = async (productData) => {
	const result = await Product.insertMany(productData);
	// const BarndID = productData?.brand?.id;
	// const saveProductIDtoBrand = await Brand.updateOne(
	// 	{ _id: BarndID },
	// 	{ $push: { products: result?._id } },
	// );
	// console.log(saveProductIDtoBrand);
	// console.log(result);
	const update = [];
	result.forEach((product) => {
		update.push(
			Brand.updateOne(
				{ _id: product?.brand?.id },
				{ $push: { products: product?._id } },
				{ new: true, runValidators: true },
			),
		);
	});
	const updateToBrands = await Promise.all(update);
	// console.log({ updateToBrands });
	return result;
};

exports.createProductServices = async (productData) => {
	const result = await Product.create(productData);
	const BarndID = productData?.brand?.id;
	try {
		const saveProductIDtoBrand = await Brand.updateOne(
			{ _id: BarndID },
			{ $push: { products: result?._id } },
		);
		console.log(saveProductIDtoBrand);
	} catch (error) {
		console.error(error);
	}

	return result;
};

exports.updateAProductService = async (id, updatedData) => {
	const result = await Product.findByIdAndUpdate(id, updatedData, {
		new: true,
	});
	return result;
};

exports.blukUpdateService = async (data) => {
	const update = [];
	data.forEach((product) => {
		update.push(
			Product.updateOne({ _id: product.id }, product.data, {
				new: true,
				runValidators: true,
			}),
		);
	});

	const result = await Promise.all(update);

	// const result = await Product.updateMany({ _id: data.id }, updatedData, { runValidators: true })

	return result;
};

exports.deleteAProductService = async (id) => {
	const result = await Product.deleteOne({ _id: id }, { new: true });
	return result;
};

exports.deleteManyProductService = async (data) => {
	// const result = await Product.deleteMany({ _id: data })
	const result = await Product.deleteMany({});

	return result;
};
