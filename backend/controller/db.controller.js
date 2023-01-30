const connectDb = require("../database/db")
const Flight = require('../database/model/Flight')

const controller = {
    index: (req, res) => {
        res.send('THIS IS BACKEND')
    },
    create: async (req, res) => {
        require('../database/model/create')
        res.redirect('/database/users')
    },
    showAll: async (req, res) => {
        const users = await Flight.find()
        res.send(users)
    },
    
    showAllApi: async (req, res) => {
        let flights = await Flight.find()
        return res.status(200).json({
            total: flights.length,
            data: flights,
            status: 200
        })
    }
}

module.exports = controller

