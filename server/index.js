const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const adminRouter = require("./routes/admin");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/admin", adminRouter);

mongoose.connect(process.env.DATABASE, {}).then(() => {
  console.log("DB Connected");
  app.listen(4000, () => console.log("Server is runninng on port 4000"));
});

