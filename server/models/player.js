const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  innings: {
    type: Number,
    required: true,
  },
  average: {
    type: Number,
    required: true,
  },
  runs: {
    type: Number,
    required: true,
  },
  centuries: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Player", playerSchema);
