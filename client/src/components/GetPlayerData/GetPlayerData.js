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
  const getClickedValue = (e) => {
    const value = parseFloat(e.target.innerText.split(":")[1].trim());
    const clickedAttribute = e.target.innerText
      .split(":")[0]
      .toLowerCase()
      .trim();
    if (value > players[1][clickedAttribute]) {
      console.log("You Win");
    } else {
      console.log("You Lose");
    }
    console.log(value, clickedAttribute);
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
              <h1 onClick={getClickedValue}>Innings: {player.innings}</h1>
              <h2 onClick={getClickedValue}>Average: {player.average}</h2>
              <span onClick={getClickedValue}>Runs: {player.runs}</span>
              <span onClick={getClickedValue}>
                Centuries: {player.centuries}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default GetPlayerData;
