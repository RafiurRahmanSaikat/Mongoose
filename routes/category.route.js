const express = require('express');
const router = express.Router();
const categoryController = require("../Controllers/category.controller")

router.route("/")
    .get(categoryController.getAllCategory)
    .post(categoryController.createACategory)

module.exports = router