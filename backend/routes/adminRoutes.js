const express = require('express');
const Admin = require('../models/adminModel'); // Import the Admin model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // JWT for token generation
const router = express.Router();

// Admin login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the admin by username
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Compare the entered password with the hashed password
    const isMatch = await admin.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      process.env.JWT_SECRET, // Secret key for JWT
      { expiresIn: '30d' } // Token expiration time (30 days)
    );

    // Respond with success message and the token
    res.status(200).json({
      message: 'Admin logged in successfully',
      token,
    });
  } catch (error) {
    console.error('Error logging in admin:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});



// Admin registration route
router.post('/register', async (req, res) => {
  const { username, password, confirmPassword } = req.body;

  try {
    // Validate password match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Check if the admin already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    // Create a new admin instance
    const admin = new Admin({
      username,
      password, // The password will be hashed by the pre-save hook
    });

    // Save the new admin to the database
    await admin.save();

    // Respond with a success message
    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    console.error('Error registering admin:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

module.exports = router;
