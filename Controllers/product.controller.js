const { getProductService, createProductServices, updateAProductService } = require("../services/product.services");

exports.getAllProduct = async (req, res, next) => {

    try {
        const result = await getProductService()
        res.status(200).send({
            success: true,
            message: "Successfully get all products",
            result: result
        })
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Product createtion failed",
            error: error.message,
        });
    }
}
exports.createProduct = async (req, res, next) => {
    try {

        const result = await createProductServices(req.body)
        result.logger()
        res.status(200).send({
            success: true,
            message: "Product created successfully",
            result: result
        });

    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Product createtion failed",
            error: error.message,
        });
    }
}
exports.updateAProduct = async (req, res, next) => {
    try {

        const id = req.params.id
        const result = await updateAProductService(id, req.body)

        res.status(200).send({
            success: true,
            message: "Product Updated successfully",
            result: result
        })

    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Product Update failed",
            error: error.message,
        })
    }
}