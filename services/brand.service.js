const Brand = require('../models/brand.model');

exports.getBrandService = async () => {
  const Brands = await Brand.find()
    .populate('products')
    .populate('suppliers.id');
  return Brands;
};

exports.createABrandService = async (data) => {
  try {
    // const result = await new Brand(data).save();
    const result = await Brand.create(data);
    // console.log(result)
    return result;
  } catch (error) {
    console.error(error);
  }
  // const Brand = new Brand(data)
  // const result = await Brand.create(data,{runValidators:true});
};

exports.createManyBrandService = async (data) => {
  try {
    const result = await Brand.insertMany(data);
    console.log(result);
    return result;
  } catch (error) {
    // console.error(error);
    res.status(400).send({
      success: false,
      message: 'Failed to Add All Brand',
      error,
    });
  }
};
