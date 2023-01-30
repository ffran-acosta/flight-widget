const express = require("express");
const app = express();

//server
const { port, start } = require("./modules/server");
app.listen(port, start());

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use('/database' ,require("./routes/db.routes"))

const axios = require("axios");