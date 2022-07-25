import axios from "axios";
import React from "react";

const GetPlayerData = () => {
  const fetchPlayer = () => {
    axios
      .get("http://localhost:4000/admin/get-player")
      .then((res) => console.log(res));
  };
  return (
    <div>
      <button type="button" onClick={fetchPlayer}>
        Get Player Data
      </button>
    </div>
  );
};

export default GetPlayerData;
