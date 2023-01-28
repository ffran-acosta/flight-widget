//mongoDB connection

const mongoose = require('mongoose');
//const user = 'reactProject'
const password = 'reactProject'
const uri = `mongodb+srv://reactProject:${password}@flight-widget.9ixtloy.mongodb.net/?retryWrites=true&w=majority`

const main = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error)
    }
}
main();

module.exports = main;