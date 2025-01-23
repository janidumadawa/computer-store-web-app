const express = require("express");
const Product = require("../models/product");
const router = express.Router();

// Add Product
router.post("/addproduct", async (req, res) => {
  try {
    const { pname, price, details, category, quantity } = req.body;
    const product = await Product.create({ pname, price, details, category, quantity });
    res.status(200).json({ product });
  } catch (err) {
    res.status(400).json({ error: "Server Error" });
  }
});

// Get All Products
router.get("/getproduct", async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products); // Add this line to debug
    res.status(200).json({ products });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Get Product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({ product });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Delete Product
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product is Deleted" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Update Product
router.put("/:id", async (req, res) => {
  try {
    const { pname, price, details, category, quantity } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { pname, price, details, category, quantity },
      { new: true }
    );
    res.status(200).json({ product });
  } catch (err) {
    res.status(400).json({ error: "Server Error" });
  }
});

module.exports = router;