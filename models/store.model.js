const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please enter a valid Store Name'],
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
        message: '{VALUE} is not a valid name',
      },
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, 'Please Provide Description '],
    },
    manager: {
      name: String,
      contactNumber: Number,
      id: {
        type: ObjectId,
        ref: 'User',
      },
    },
    status: {
      type: String,
      enum: ['active', 'in-active'],
      default: 'active',
    },
  },
  { timestamps: true },
);

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
