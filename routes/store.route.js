const express = require('express');
const router = express.Router();
const storeController = require("../Controllers/store.controller")

router.route("/")
    .get(storeController.getAllStore)
    .post(storeController.createAStore)

router.route("/bluk")
    .post(storeController.createManyStore)

module.exports = router