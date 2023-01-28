const express = require("express");
const app = express();

//server
const { port, start } = require("./modules/server");
app.listen(port, start());

//const axios = require("axios");
//const cors = require("cors");

require("dotenv").config()

//db connection
const db = require("./database/db")
app.use(db)

app.use(require("./routes/flight.routes"))
