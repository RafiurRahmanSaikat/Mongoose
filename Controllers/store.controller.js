const { getStoreService, createAStoreService } = require("../services/store.service");


exports.getAllStore = async (req, res, next) => {
    try {

        const result = await getStoreService({})
        res.status(200).send({
            success: true,
            massage: "Successfully get all stores",
            data: result
        })

    } catch (error) {

        res.status(400).send({
            success: false,
            message: "Failed to get all stores",
            error: error.message,
        });

    }
}

exports.createAStore = async (req, res, next) => {

    const data = req.body
    console.log(data)

    try {

        const result = await createAStoreService(req.body)
        res.status(200).send({
            success: true,
            massage: "Successfully Add the store",
            data: result
        })

    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Failed to Add the store",
            error: error.message,
        });
    }


}