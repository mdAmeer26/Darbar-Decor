const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    
    // If MongoDB connection fails, the app will continue to run
    // but will use JSON file fallback for data storage
    console.log('⚠️  Continuing without database. Using file-based storage.');
  }
};

module.exports = connectDB;
