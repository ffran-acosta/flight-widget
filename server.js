const express = require("express");
const app = express();

const port = process.env.PORT || 7005;
const start = () => (console.log(`Starting server => http://localhost:${port}`));
app.listen(port, start());

const axios = require("axios");
const cors = require("cors");

require("dotenv").config()
