const mongoose = require('mongoose');

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
