const { getBrandService, createABrandService } = require("../services/brand.service");


exports.getAllBrand = async (req, res, next) => {
    try {

        const result = await getBrandService({})
        res.status(200).send({
            success: true,
            massage: "Successfully get all Brands",
            data: result
        })

    } catch (error) {

        res.status(400).send({
            success: false,
            message: "Failed to get all Brands",
            error: error.message,
        });

    }
}

exports.createABrand = async (req, res, next) => {

    const data = req.body

    // console.log(data)

    try {

        const result = await createABrandService(req.body)
        res.status(200).send({
            success: true,
            massage: "Successfully Add the Brand",
            data: result
        })

    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Failed to Add the Brand",
            error: error.message,
        });
    }


}