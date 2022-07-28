import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Player from "../User/Player";

const Players = () => {
  const [playersList, setPlayersList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/getAll-players")
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          setPlayersList(res.data.players);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <Fragment>
      {playersList.length > 0 &&
        playersList.map((player) => (
          <div key={player._id}>
            <Player player={player} />
            <div>
                <button type="button">delete</button>
                <button type="update">update</button>
            </div>
          </div>
        ))}
    </Fragment>
  );
};

export default Players;
