const express = require('express');
const router = express.Router();
const productController = require("../Controllers/product.controller")

router.route("/")
    .get(productController.getAllProduct)
    .post(productController.createProduct);

router.route("/:id")
    .patch(productController.updateAProduct)

module.exports = router