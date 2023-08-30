const express = require('express');
const router = express.Router();
const storeController = require("../Controllers/store.controller")

router.route("/")
    .get(storeController.getAllStore)
    .post(storeController.createAStore)

module.exports = router