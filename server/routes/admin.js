const express = require("express");
const router = express.Router();

const playerController = require("../controller/player");

router.post("/add-player", playerController.postAddPlayer);
router.post("/update-player", playerController.postUpdatePlayer);
router.get("/get-player", playerController.getPlayer);
router.get("/getAll-players", playerController.getAllPlayers);

module.exports = router;
