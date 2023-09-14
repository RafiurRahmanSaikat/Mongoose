const express = require('express');
const router = express.Router();
const stockController = require("../Controllers/stock.controller")

router.route("/")
    .get(stockController.getAllStock)
    .post(stockController.createAStock)

router.route("/bluk")
    .post(stockController.createManyStock)

module.exports = router