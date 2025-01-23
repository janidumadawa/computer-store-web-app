const express = require("express");
const Category = require("../models/category"); // Ensure the correct path to the Category model
const router = express.Router();

// Add Category
router.post("/addcategory", async (req, res) => {
  try {
    const { cname, quantity, status } = req.body;
    const category = await Category.create({ cname, quantity,status });
    res.status(200).json({ category });
  } catch (err) {
    res.status(400).json({ error: "Server Error" });
  }
});

// Get All Categories
router.get("/getcategory", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ categories });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Get Category by ID
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json({ category });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Delete Category
router.delete("/:id", async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Category is Deleted" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Update Category
router.put("/:id", async (req, res) => {
  try {
    const { cname, quantity, status } = req.body;
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { cname, quantity, status },
      { new: true }
    );
    res.status(200).json({ category });
  } catch (err) {
    res.status(400).json({ error: "Server Error" });
  }
});

// Export the router
module.exports = router;
