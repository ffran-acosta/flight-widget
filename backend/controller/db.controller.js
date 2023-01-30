const connectDb = require("../database/db")
const User = require('../database/model/User')

const controller = {
    index: (req, res) => {
        res.send('THIS IS BACKEND')
    },
    create: async (req, res) => {
        const createUser = require('../database/model/create')
        res.redirect('/users')
    },
    showAll: async (req, res) => {
        const users = await User.find()
        res.send(users)
    }
}

module.exports = controller

