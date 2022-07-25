const express = require("express");
const router = express.Router();

const playerController = require("../controller/player");

router.post("/add-player", playerController.postAddPlayer);

module.exports = router;
