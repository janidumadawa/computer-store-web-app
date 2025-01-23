const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the Admin schema
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensuring the username is unique
  },
  password: {
    type: String,
    required: true,
  },
});

// Pre-save hook to hash the password before saving it to the database
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next(); // If the password isn't modified, skip the hashing
  }
  const salt = await bcrypt.genSalt(10); // Generate a salt for password hashing
  this.password = await bcrypt.hash(this.password, salt); // Hash the password
  next();
});

// Instance method to compare passwords during login
adminSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password); // Compare entered password with the hashed password
};

// Create the Admin model
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
