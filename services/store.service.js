const Store = require("../models/store.model")

exports.getStoreService = async (filter) => {

    const stores = await Store.find()
    return stores

}

exports.createAStoreService = async (data) => {

    const result = await new Store(data).save();
    return result

    // const store = new Store(data)
    // const result = await store.save();

    // const result = await Store.create(data,{runValidators:true});


}

