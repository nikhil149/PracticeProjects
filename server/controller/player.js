const Player = require("../models/player");

exports.postAddPlayer = (req, res, next) => {
  const playerName = req.body.playerName;
  const innings = parseInt(req.body.innings, 10);
  const average = parseFloat(req.body.average);
  const runs = parseInt(req.body.runs, 10);
  const format = req.body.format;
  const centuries = parseInt(req.body.centuries);
  const halfCenturies = parseInt(req.body.halfCenturies);
  const overs = parseInt(req.body.overs);
  const wickets = parseInt(req.body.wickets);
  const bowlAverage = parseFloat(req.body.bowlAverage);
  const catches = parseInt(req.body.catches);
  const player = new Player({
    name: playerName,
    innings: innings,
    format: format,
    average: average,
    runs: runs,
    centuries: centuries,
    halfCenturies: halfCenturies,
    overs: overs,
    wickets: wickets,
    catches: catches,
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
    .then((result) => res.json({ players: result }))
    .catch((err) => console.log(err.message));
};

exports.postUpdatePlayer = (req, res, next) => {
  const id = req.body.id;
  const playerName = req.body.playerName;
  const innings = parseInt(req.body.innings, 10);
  const average = parseFloat(req.body.average);
  const runs = parseInt(req.body.runs, 10);
  const format = req.body.format;
  const centuries = parseInt(req.body.centuries);
  const halfCenturies = parseInt(req.body.halfCenturies);
  const overs = parseInt(req.body.overs);
  const wickets = parseInt(req.body.wickets);
  const bowlAverage = parseFloat(req.body.bowlAverage);
  const catches = parseInt(req.body.catches);
  Player.findById(id)
    .then((player) => {
      player.name = playerName;
      player.innings = innings;
      player.average = average;
      player.runs = runs;
      player.format = format;
      player.centuries = centuries;
      player.halfCenturies = halfCenturies;
      player.overs = overs;
      player.wickets = wickets;
      player.bowlAverage = bowlAverage;
      player.catches = catches;
      player.save();
    })
    .then((result) => res.json({ msg: "Success" }))
    .catch((err) => console.log(err.message));
};
