const Brand = require('../models/brand.model');

exports.getBrandService = async (filter) => {
  const Brands = await Brand.find().populate('products');
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
