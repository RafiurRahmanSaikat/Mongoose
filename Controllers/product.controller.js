const { getProductService, createProductServices, updateAProductService, blukUpdateService, deleteAProductService, deleteManyProductService } = require("../services/product.services");

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
            result
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

exports.blukUpdate = async (req, res, next) => {
    try {
        const result = await blukUpdateService(req.body)

        res.status(200).send({
            success: true,
            message: "Bluk Product Update With Diffrent Data Successful",
            result
        })



    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Bluk Product Update With Diffrent Data Failed",
            error: error.message,
        })
    }
}

exports.deleteAProduct = async (req, res, next) => {
    try {

        const id = req.params.id
        const result = await deleteAProductService(id)

        if (result.deletedCount) {
            res.status(200).send({
                success: true,
                message: "Product Deleted Successfully",
                result
            })
        } else {
            res.status(400).send({
                success: false,
                message: "Product Delete Unsuccessful",

            })
        }


    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Product Delete Failed",
            error: error.message,
        })
    }
}

exports.blukDelete = async (req, res, next) => {

    try {
        const {ids} = req.body

        const result = await deleteManyProductService(ids)

        if (result.deletedCount) {
            res.status(200).send({
                success: true,
                message: "Products Deleted Successfully",
                result
            })
        } else {
            res.status(400).send({
                success: false,
                message: "Products Delete Unsuccessful",
                result

            })
        }


    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Products Delete Failed",
            error: error.message,
        })
    }
}