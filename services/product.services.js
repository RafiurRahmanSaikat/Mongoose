const Product = require("../models/Product")

exports.getProductService = async () => {

    const result = await Product.find({})
    return result

}

exports.createProductServices = async (productData) => {

    // const result = await Product.create(productData);
    const product = new Product(productData);
    const result = await product.save();
    return result

}


exports.updateAProductService = async (id, updatedData) => {


    const result = await Product.findByIdAndUpdate(id, updatedData, { new: true })
    return result
}



