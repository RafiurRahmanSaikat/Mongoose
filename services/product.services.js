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
        update.push(
            Product.updateOne(
                { _id: product.id }, product.data,
                { new: true, runValidators: true }
            )
        )
    });

    const result = await Promise.all(update)
    console.log(result)
    // const result = await Product.updateMany({ _id: data.id }, updatedData, { runValidators: true })

    return result
}

exports.deleteAProductService = async (id) => {
    const result = await Product.deleteOne({ _id: id }, { new: true })
    return result
}
exports.deleteManyProductService = async (data) => {

    const result = await Product.deleteMany({ _id: data })

    return result
}