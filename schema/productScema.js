module.exports = productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      unique: [true, "Name must be unique"],
      minLenght: [10, "Product Name must be at least 10 characters"],
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
        value: ["kg", "litre", "pcs"],
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
        value: ["in stock", "out of Stock", "discontinued"],
        massage:
          "Status value cann't be {VALUE},must be in stock/out of Stock/discontinued",
      },
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
    },

    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    // updatedAt: {
    //   type: Date,
    //   default: Date.now,
    // },
  },

  { timestamps: true, _id: 0 }
);
