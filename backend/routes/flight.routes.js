const { Router } = require("express");
const router = Router();

const Flight = require("../database/model/flight.model")

router.get('/', async (req, res) => {
    try{
        const arrayFlightsDB = await Flight.find()
        console.log(arrayFlightsDB)
    } 
    catch(err){
    }
})

module.exports = router
