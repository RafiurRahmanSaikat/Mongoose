const {
  getsupplierService,
  createAsupplierService,
  createManySupplierService,
} = require('../services/supplier.service.js');

exports.getAllsupplier = async (req, res, next) => {
  try {
    const result = await getsupplierService({});
    res.status(200).send({
      success: true,
      message: 'Successfully get all suppliers',
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: 'Failed to get all suppliers',
      error: error.message,
    });
  }
};

exports.createAsupplier = async (req, res, next) => {
  const data = req.body;
  console.log(data);

  try {
    const result = await createAsupplierService(req.body);
    res.status(200).send({
      success: true,
      message: 'Successfully Add the supplier',
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: 'Failed to Add the supplier',
      error: error.message,
    });
  }
};
exports.createManysupplier = async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await createManySupplierService(req.body);

    res.status(200).send({
      success: true,
      message: 'Successfully Added All Supplier',
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: 'Failed to Add All Supplier',
      error: error.message,
    });
  }
};
