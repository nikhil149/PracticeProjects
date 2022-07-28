const Player = require("../models/player");

exports.postAddPlayer = (req, res, next) => {
  const playerName = req.body.playerName;
  const innings = parseInt(req.body.innings, 10);
  const average = parseFloat(req.body.average);
  const runs = parseInt(req.body.runs, 10);
  const format = req.body.format;
  const centuries = parseInt(req.body.centuries);
  const player = new Player({
    name: playerName,
    innings: innings,
    format: format,
    average: average,
    runs: runs,
    centuries: centuries,
  });
  player
    .save()
    .then(() => {
      res.json({ msg: "success" });
    })
    .catch((err) => res.json({ msg: err.message }));
  // console.log(req.data, req.body);
};

exports.getPlayer = (req, res, next) => {
  Player.aggregate([{ $sample: { size: 2 } }])
    .then((players) => res.json({ players: players }))
    .catch((err) => res.json({ msg: err.message }));
};

exports.getAllPlayers = (req, res, next) => {
  Player.find()
    .then((result) => res.json({players: result}))
    .catch((err) => console.log(err.message));
};
