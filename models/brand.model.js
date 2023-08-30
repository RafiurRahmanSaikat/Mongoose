const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, 'Please enter a valid Brand Name'],
      maxlength: 100,
    },
    description: String,
    email: {
      type: String,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid Email'],
    },
    website: {
      type: String,
      validate: [validator.isURL, 'Please  provide a valid URL'],
    },
    location: String,

    products: [
      {
        type: ObjectId,
        ref: 'Product',
      },
    ],
    // supplier: [{
    //     name: String,
    //     contanctNumber: String,
    //     id: {
    //         type: ObjectId,
    //         ref: "Supplier"
    //     }
    // }],
    status: {
      type: String,
      enum: ['active', 'in-active'],
      default: 'active',
    },
  },
  { timestamps: true },
);

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
