const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;
// ? Schema

const productSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please provide a name'],
			trim: true,
			lowercase: true,
			unique: [true, 'Name must be unique'],
			minLenght: [3, 'Product Name must be at least 3 characters'],
			maxLenght: [50, "Product Name cann't be more 50 characters"],
		},
		description: {
			type: String,
			required: [true, 'Please Provide a description'],
			trim: true,
		},
		unit: {
			type: String,
			required: true,
			enum: {
				values: ['kg', 'litre', 'pcs', 'bag'],
				message: "Unit value cann't be {VALUE} ,must be kg/litre/pcs/bag",
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
		imageURLs: [
			{
				type: String,
				required: true,
				validate: [validator.isURL, 'Please provide valid url(s)'],

				/**
       *
       * ! Latest version of Validator allowing us to validate multiple images with "validator.isURL" function .
       *
      validate: {
          validator: (value) => {
            if (!Array.isArray(value)) {
              return false;
            }
            let isValid = true;
            value.forEach((url) => {
              if (!validator.isURL(url)) {
                isValid = false;
              }
            });
            return isValid;
          },
          message: 'Please provide valid image urls',
        },*/
			},
		],
		category: {
			type: String,
			required: true,
		},
		brand: {
			name: {
				type: String,
				required: true,
			},
			id: {
				type: ObjectId,
				ref: 'Brand',
				required: true,
			},
		},
	},

	{ timestamps: true },
);

// ? Model

// productSchema.pre('save', function (next) {
//   console.log('Before save');
//   next();
// });
// productSchema.post('save', function (doc, next) {
//   console.log('After save');
//   next();
// });
// productSchema.methods.logger = function () {
//   console.log(`Saved product ${this.name}`);
// };

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
