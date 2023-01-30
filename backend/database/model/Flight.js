const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    departing: String,
    destination: String,
    flightNumber: String,
    gate: String,
    status: String
})

module.exports = mongoose.model('Flight', userSchema)
