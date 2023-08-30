const { getProductService,
    createProductServices,
    updateAProductService,
    blukUpdateService,
    deleteAProductService,
    deleteManyProductService } = require("../services/product.services");

exports.getAllProduct = async (req, res, next) => {

    try {
        const queries = {}
        let filterBy = {}

        const regex = (/\b(gt|gte|lt|lte)\b/g)
        const filters = { ...req.query }

        // ! { price: {  $lt: 50 } }

        const found = regex.test(JSON.stringify(filters))

        let filter = JSON.stringify(filters)
        filter = filter.replace(regex, match => `$${match}`)
        filter = JSON.parse(filter)


        console.log({ found, filter })

        if (found) {

            filterBy = filter
        }

        // const url =JSON.stringify(req.query)

        // if (found) {
        //   const result= (url.replace(regex, match => ` $${match}`))
        //   const data=JSON.parse(result)

        //   console.log(found,result,data)
        // }


        if (req.query.id) {
            filterBy = { _id: req.query.id }
        }

        if (req.query.sort) {
            const sort = req.query.sort.split(",").join(" ")
            queries.sortBy = sort
        }

        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ")
            queries.selectFields = fields
        }
        if (req.query.page) {
            const { page = 1, limit = 5 } = req.query
            let skip = (page - 1) * (+limit)
            queries.skip = skip
            queries.limit = (+limit)

            // console.log(queries)
        }


        const result = await getProductService(filterBy, queries)

        res.status(200).send({
            success: true,
            message: "Successfully get all products",
            result: result
        })
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Failed",
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
        const { ids } = req.body

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