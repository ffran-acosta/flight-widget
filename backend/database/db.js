//mongoDB connection
const mongoose = require('mongoose');
const user = 'project'
const password = 'iRpsSusjqEFjbox5'
const uri = `mongodb+srv://${user}:${password}@cluster0.zcnzdps.mongodb.net/?retryWrites=true&w=majority`

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error)
    }
}

connect();

module.exports = connect;

