const express = require("express");
const router = express.Router();

const playerController = require("../controller/player");

router.post("/add-player", playerController.postAddPlayer);
router.get("/get-player", playerController.getPlayer);

module.exports = router;
