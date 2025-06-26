const mongoose = require('mongoose');

// Define the schema
const urlSchema = new mongoose.Schema({
    fullurl: {
        type: String,
        required: true
    },
    validity: {
        type: Number,
        default: 30 
    },
    shorturl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Url', urlSchema);
