const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    CompanyName: {
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
    serviceType:{
        type: String,
        required: true,
        enum: ['Solar Energy Solutions','Wind Power Management','Energy Efficiency','Industrial Solutions']
    },
    Message: {
        type: String,
        required: true
    },

}, { timestamps: true });       

module.exports = mongoose.model('Content',ContentSchema); // Export the model for use in other files
