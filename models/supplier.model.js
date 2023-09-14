const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

// ?  Schema

const supplierSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
      lowercase: true,
      unique: [true, 'Name must be unique'],
      minLenght: [3, 'Supplier Name must be at least 3 characters'],
      maxLenght: [50, "Supplier Name cann't be more 50 characters"],
    },
    email: {
      type: String,
      validate: [validator.isEmail, 'Please provide a valid email'],
      required: true,
      unique: true,
      trim: true,
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
    contactNumber: [
      {
        type: String,
        required: [true, 'Please provide a contact number'],
        validate: {
          validator: (value) => {
            return validator.isMobilePhone(value);
          },
          message: 'Please provide a valid phone number',
        },
      },
    ],
    emergencyContactNumber: {
      type: String,
      required: [true, 'Please provide a valid  emergency contact number'],
    },
    tradeLicenseNumber: {
      type: Number,
      required: [true, 'Please provide a valid trade License number'],
    },
    presentAddress: {
      type: String,
      required: [true, 'Please provide Present Address'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Please provide Premanent Address'],
    },
    location: {
      type: String,
      required: true,
      lowercase: true,
      enum: {
        values: [
          'dhaka',
          'rajshahi',
          'chattogram',
          'sylhet',
          'khulna',
          'barishal',
          'rangpur',
          'mymensingh',
        ],
        message: '{VALUE} is not  a correct division!',
      },
    },
    imageURL: {
      type: String,
      required: [true, 'Please provide a valid image URL'],
    },
    nationalIdCardIamgeURL: {
      type: String,
      required: [true, 'Please provide  national card'],
      validate: [validator.isURL, 'Please provide a valid NID'],
    },
    status: {
      type: String,
      enum: ['active', 'in-active'],
      default: 'active',
    },
  },

  { timestamps: true },
);

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
