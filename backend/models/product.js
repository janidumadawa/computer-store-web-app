const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  pname: { type: String, required: true },
  price: { type: Number, required: true },
  details: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
