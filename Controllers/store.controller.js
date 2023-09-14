const {
  getStoreService,
  createAStoreService,
  createManyStoreService,
} = require('../services/store.service');

exports.getAllStore = async (req, res, next) => {
  try {
    const result = await getStoreService({});
    res.status(200).send({
      success: true,
      message: 'Successfully get all stores',
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: 'Failed to get all stores',
      error: error.message,
    });
  }
};

exports.createAStore = async (req, res, next) => {
  const data = req.body;
  console.log(data);

  try {
    const result = await createAStoreService(req.body);
    res.status(200).send({
      success: true,
      message: 'Successfully Add the store',
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: 'Failed to Add the store',
      error: error.message,
    });
  }
};

exports.createManyStore = async (req, res, next) => {
  try {
    const result = await createManyStoreService(req.body);
    res.status(200).send({
      success: true,
      message: 'Successfully Added All store',
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: 'Failed to Add All store',
      error: error.message,
    });
  }
};
