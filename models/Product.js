const mongoose = require('mongoose');




// ? Schema

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a name"],
            trim: true,
            unique: [true, "Name must be unique"],
            minLenght: [3, "Product Name must be at least 3 characters"],
            maxLenght: [30, "Product Name cann't be more 30 characters"],
        },
        discription: {
            type: String,
            required: [true, "Please provide a discription"],
            trim: true,
        },
        price: {
            type: Number,
            required: [true, "Please provide a price"],
            min: [0, "Price cann't be negative"],
        },
        unit: {
            type: String,
            required: true,
            // enum:["kg", "litre","pcs"]
            enum: {
                values: ["kg", "litre", "pcs"],
                massage: "Unit value cann't be {VALUE} ,must be kg/litre/pcs",
            },
        },
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
        status: {
            type: String,
            required: true,
            enum: {
                values: ["in stock", "out of Stock", "discontinued"],
                massage:
                    "Status value cann't be {VALUE},must be in stock/out of Stock/discontinued",
            },
        },
        // supplier: {
        //   type: mongoose.Schema.Types.ObjectId,
        //   ref: "Supplier",
        // },

        // createdAt: {
        //   type: Date,
        //   default: Date.now,
        // },
        // updatedAt: {
        //   type: Date,
        //   default: Date.now,
        // },
    },

    { timestamps: true }
);

// ? Model

productSchema.pre("save", function (next) {
    console.log("Before save");
    next();
});
productSchema.post("save", function (doc, next) {
    console.log("After save");
    next();
});
productSchema.methods.logger = function () {
    console.log(`Saved product ${this.name}`);
};

const Product = mongoose.model("Product", productSchema);

module.exports = Product;