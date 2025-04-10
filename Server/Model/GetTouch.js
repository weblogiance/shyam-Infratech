const mongoose = require('mongoose');

const GetContentSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    CallInfo:{
        countryCode:{
            type: String,
            required: true
        },
        countryName:{
            type: String,
            required: true
        },
        phone:{
            type: String,
            required: true
        }
    },
    Message: {
        type: String,
        required: true
    },

}, { timestamps: true });       

module.exports = mongoose.model('GetContent', GetContentSchema); // Export the model for use in other files
