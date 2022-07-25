import React, { useState } from "react";
import axios from "axios";

const AddCricketData = () => {
  const [format, setFormat] = useState("Test");
  const [playerName, setPlayerName] = useState("");
  const [innings, setInnings] = useState(0);
  const [average, setAverage] = useState(0.0);
  const [runs, setRuns] = useState(0);
  const [centuries, setCenturies] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
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
