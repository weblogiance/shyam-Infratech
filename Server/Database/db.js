const mongoose = require('mongoose');   
require('dotenv').config(); // Load environment variables from .env file

exports.dbconnection = async () => {
    try {
        await mongoose.connect(process.env.SHYAM_INFRATECH_DB);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
}