import axios from "axios";
import React, { useState } from "react";

const GetPlayerData = () => {
  const [players, setPlayers] = useState([]);
  const fetchPlayer = () => {
    axios
      .get("http://localhost:4000/admin/get-player")
      .then((res) => {
        if (res.status === 200) {
          setPlayers(res.data.players);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <button type="button" onClick={fetchPlayer}>
        Get Player Data
      </button>
      {players.length > 0 &&
        players.map((player) => (
          <div key={player._id}>
            <h1>{player.name}</h1>
            <div>
              <h1>Innings: {player.innings}</h1>
              <h2>Average: {player.average}</h2>
              <span>Runs: {player.runs}</span>
              <span>Centuries: {player.centuries}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default GetPlayerData;
