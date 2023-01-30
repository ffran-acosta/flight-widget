const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    description: String,
    linkedin: String,
    github: String,
    mail: String
})

module.exports = mongoose.model('User', userSchema)
