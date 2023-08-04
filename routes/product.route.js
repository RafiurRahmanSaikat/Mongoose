const express = require('express');
const router = express.Router();
const productController = require("../Controllers/product.controller")



router.route("/blukUpdates")
    .patch(productController.blukUpdate)

router.route("/blukDelete")
    .delete(productController.blukDelete)

router.route("/")
    .get(productController.getAllProduct)
    .post(productController.createProduct);

router.route("/:id")
    .patch(productController.updateAProduct)
    .delete(productController.deleteAProduct)

module.exports = router