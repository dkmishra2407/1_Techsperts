const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database successfully");
  } catch (err) {
    console.log("Database connection failed", err);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
