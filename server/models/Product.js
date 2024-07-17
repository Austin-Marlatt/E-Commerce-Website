const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    seller: {
      type: String,
      required: true
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
const Product = model('Product', productSchema);

module.exports = productSchema
module.exports = Product