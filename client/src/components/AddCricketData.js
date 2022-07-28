import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const AddCricketData = () => {
  const location = useLocation();
  const { state } = location;
  const [format, setFormat] = useState("Test");
  const [playerName, setPlayerName] = useState(state?.player.name || "");
  const [innings, setInnings] = useState(state?.player.innings || 0);
  const [average, setAverage] = useState(state?.player.average || 0.0);
  const [runs, setRuns] = useState(state?.player.runs || 0);
  const [centuries, setCenturies] = useState(state?.player.centuries || 0);

  const submitHandler = (e) => {
    e.preventDefault();
    if (state?.player._id) {
      axios
        .post("http://localhost:4000/admin/update-player", {
          id: state?.player._id,
          playerName: playerName,
          innings: innings,
          average: average,
          runs: runs,
          format: format,
          centuries: centuries,
        })
        .then((res) => {
          setPlayerName("");
          setAverage(0.0);
          setCenturies(0);
          setInnings(0);
          setRuns(0);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post("http://localhost:4000/admin/add-player", {
          playerName: playerName,
          innings: innings,
          average: average,
          runs: runs,
          format: format,
          centuries: centuries,
        })
        .then((res) => {
          setPlayerName("");
          setAverage(0.0);
          setCenturies(0);
          setInnings(0);
          setRuns(0);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <select value={format} onChange={(e) => setFormat(e.target.value)}>
        <option>Test</option>
        <option>T20</option>
        <option>ODI</option>
      </select>
      <div>
        <label htmlFor="playerName">Player Name</label>
        <input
          id="playerName"
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="centuries">Centuries</label>
        <input
          id="centiries"
          type="number"
          value={centuries}
          onChange={(e) => setCenturies(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="innings">Innings</label>
        <input
          id="innings"
          type="number"
          value={innings}
          onChange={(e) => setInnings(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="average">Average</label>
        <input
          id="average"
          type="number"
          value={average}
          onChange={(e) => setAverage(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="runs">Runs</label>
        <input
          id="runs"
          type="number"
          value={runs}
          onChange={(e) => setRuns(e.target.value)}
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default AddCricketData;
