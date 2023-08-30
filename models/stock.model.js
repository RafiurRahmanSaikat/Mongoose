const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types
// ? Schema

const stockSchema = mongoose.Schema(
    {
        productId: {
            type: ObjectId,
            ref: "Product",
            required: true,
        }
        ,
        name: {
            type: String,
            required: [true, "Please provide a name"],
            trim: true,
            lowercase: true,
            unique: [true, "Name must be unique"],
            minLenght: [3, "Stock Name must be at least 3 characters"],
            maxLenght: [50, "Stock Name cann't be more 50 characters"],
        },
        description: {
            type: String,
            required: [true, "Please Provide a description"],
            trim: true,
        },

        unit: {
            type: String,
            required: true,
            // enum:["kg", "litre","pcs"]
            enum: {
                values: ["kg", "litre", "pcs", "bag"],
                massage: "Unit value cann't be {VALUE} ,must be kg/litre/pcs/bag",
            },
        },
        imageURLs: [{
            type: String,
            required: true,
            validate: {
                validator: (value) => {
                    if (!Array.isArray(value)) {
                        return false;
                    }

                    let isValid = true
                    value.forEach(url => {
                        if (!validator.isURL(url)) {
                            isValid = false;
                        }
                    });
                    return isValid
                },
                massage: "Please enter a valid IMAGE URL",
            }
        }],
        quantity: {
            type: Number,
            required: true,
            min: [0, "Quantity cann't be negative"],
            validate: {
                validator: (value) => {
                    const isInteger = Number.isInteger(value);
                    if (isInteger) {
                        return true;
                    } else {
                        return false;
                    }
                },
                message: "Quantity cann't be negative and must be a integer number",
            },
        },
        price: {
            required: true,
            type: Number,
            min: [0, "Product price can't be negative"]
        },
        quantity: {
            required: true,
            type: Number,
            min: [0, "Product quantity can't be negative"]
        },
        catagory: {
            type: String,
            required: true
        },
        brand: {
            name: {
                type: String,
                required: true
            },
            id: {
                type: ObjectId,
                ref: "Brand",
                required: true
            }
        },
        status: {
            type: String,
            required: true,
            enum: {
                values: ["in stock", "out of stock", "comming soon", "discontinued",],
                massage: "Status can't be {VALUE}"
            }
        },
        store: {
            name: {
                type: String,
                lowercase: true,
                trim: true,
                required: [true, "Please enter a valid Store Name"],
                enum: {
                    values: ["dhaka", "sylhet", "rangpur", "dinajpur"],
                    massage: "{VALUE} is not a valid name"
                }
            },
            id: {
                type: ObjectId,
                required: true,
                ref: "Store"
            }
        },
        suppliedBy: {
            name: {
                type: String,
                trim: true,
                required: [true, "Please enter a valid Supplier Name"]
            },
            id: {
                type: ObjectId,
                ref: "Supplier"
            }
        }
    },

    { timestamps: true }
);



const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;