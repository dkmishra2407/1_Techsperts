const express = require('express');
const connectDB = require('./dbconfig/dbconfig'); 


// Initialize express app
const app = express();

// Connect to the database
connectDB();

// Port number from environment or fallback to 3001
const PORT =  3001;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
