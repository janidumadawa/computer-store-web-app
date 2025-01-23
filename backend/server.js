const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productroutes');
const categoryroutes = require('./routes/categoryroutes');
const staffroutes = require('./routes/staffroutes');
const adminRoutes = require('./routes/adminRoutes'); // Add this line
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB is Connected'))
  .catch((err) => {
    console.error('Database connection failed:', err);
  });

const port = process.env.PORT || 5000; // Fallback port
app.use('/product', productRoutes);
app.use('/category', categoryroutes);
app.use('/staff', staffroutes);
app.use('/admin', adminRoutes); // Add this line

app.listen(port, () => console.log(`Server is Running on ${port}`));
