const Product = require("../models/Product")


exports.getAllProduct = async (req, res, next) => {

    try {
        const result = await Product.find({});
        res.status(200).send(result)
    }
    catch (error) {
        res.status(400).send(error);
    }
}
exports.createProduct = async (req, res, next) => {
    try {
        const product = new Product(req.body);
        const result = await product.save();
        // const result = await Product.create(req.body);
        result.logger()
        res.status(200).send("Product saved successfully");
    } catch (error) {
        res.status(400).send(error.message);
    }
}