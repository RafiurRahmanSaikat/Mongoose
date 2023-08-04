const Product = require("../models/product.model")

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

exports.blukUpdateService = async (data) => {

    const update = []

    data.forEach(product => {
        update.push(Product.updateOne({ _id: product.id }, product.data))
    });

    const result = await Promise.all(update)

    // const result = await Product.updateMany({ _id: data.id }, updatedData, { runValidators: true })

    return result
}



