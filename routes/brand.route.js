const express = require('express');
const router = express.Router();
const brandController = require('../Controllers/brand.controller');

router
  .route('/')
  .get(brandController.getAllBrand)
  .post(brandController.createABrand);

router
  .route('/bluk')
  .post(brandController.createManyBrand);


module.exports = router;
