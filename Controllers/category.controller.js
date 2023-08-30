const { getCategoryService, createACategoryService } = require("../services/category.service");



exports.getAllCategory = async (req, res, next) => {
    try {

        const result = await getCategoryService({})
        res.status(200).send({
            success: true,
            massage: "Successfully get all Category",
            data: result
        })

    } catch (error) {

        res.status(400).send({
            success: false,
            message: "Failed to get all Category",
            error: error.message,
        });

    }
}

exports.createACategory = async (req, res, next) => {

    try {

        const result = await createACategoryService(req.body)
        res.status(200).send({
            success: true,
            massage: "Successfully Add the Category",
            data: result
        })

    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Failed to Add the Category",
            error: error.message,
        });
    }


}