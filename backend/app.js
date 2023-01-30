const express = require("express");
const app = express();

//server
const { port, start } = require("./modules/server");
app.listen(port, start());

//const axios = require("axios");
//const cors = require("cors");

app.use(require("./routes/db.routes"))







