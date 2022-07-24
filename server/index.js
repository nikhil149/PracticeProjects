const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.DATABASE, {}).then(() => {
  console.log("DB Connected");
});

app.listen(3000, () => console.log("Server is runninng on port 3000"));
