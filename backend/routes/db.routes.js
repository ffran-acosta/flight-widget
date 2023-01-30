const { Router } = require("express");
const router = Router();

const connectDb = require("../database/db")
const User = require('../database/model/User')


router.get('/create', async (req, res) => {
    const createUser = require('../database/model/create')
    res.redirect('/users')
})

router.get('/users', async (req, res) => {
    router.use(connectDb)
    const users = await User.find()
    res.send(users)
})

module.exports = router