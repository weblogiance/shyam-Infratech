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
        countycode:{
            type: String,
            required: true
        },
        countyName:{
            type: String,
            required: true
        },
        number:{
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
