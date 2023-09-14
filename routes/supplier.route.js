const express = require('express');
const router = express.Router();
const supplierController = require('../Controllers/supplier.controller');

router
  .route('/')
  .get(supplierController.getAllsupplier)
  .post(supplierController.createAsupplier);
// .patch(supplierController.createAsupplier)

router
   .route('/bluk')
   .post(supplierController.createManysupplier);

module.exports = router;
