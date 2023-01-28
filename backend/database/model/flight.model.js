const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema(
    {
        nombre: String,
        status: String,
        destination: String,
        departing: Date,
        gate: String,
    }
)

const Flight = mongoose.model('Flight', flightSchema)

module.exports = Flight

