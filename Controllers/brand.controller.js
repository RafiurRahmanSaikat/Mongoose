const {
  getBrandService,
  createABrandService,
  createManyBrandService,
} = require('../services/brand.service');

exports.getAllBrand = async (req, res, next) => {
  try {
    const result = await getBrandService({});
    res.status(200).send({
      success: true,
      message: 'Successfully get all Brands',
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: 'Failed to get all Brands',
      error: error.message,
    });
  }
};

exports.createABrand = async (req, res, next) => {
  const data = req.body;

  // console.log(data)

  try {
    const result = await createABrandService(req.body);
    res.status(200).send({
      success: true,
      message: 'Successfully Add the Brand',
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: 'Failed to Add the Brand',
      error: error.message,
    });
  }
};
exports.createManyBrand = async (req, res, next) => {
  try {
    const result = await createManyBrandService(req.body);
    res.status(200).send({
      success: true,
      message: 'Successfully Added All Brand',
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: 'Failed to Add All Brand',
      error: error.message,
    });
  }
};
