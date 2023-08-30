const Category = require("../models/category.model")

exports.getCategoryService = async (filter) => {

    const category = await Category.find()
    return category

}

exports.createACategoryService = async (data) => {
    console.log(data)
    const result = await Category.insertMany(data);
    return result

    // const result = await Category.create(data);
    // const store = new Store(data)
    // const result = await store.save();



}

