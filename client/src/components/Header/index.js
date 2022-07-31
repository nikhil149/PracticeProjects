import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import classes from "./styles.module.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav className={classes.nav}>
        <h1 className={classes.nav_h1}> Nikhil</h1>
        <div className={classes.nav__firstDiv}>
          <NavLink to="/admin/addPlayer">Add Player</NavLink>
          <NavLink to="/admin/getPlayer">Get Player</NavLink>
          <NavLink to="/admin/getAllPlayers">Get All Players</NavLink>
        </div>
        <div className={classes.nav__secondDiv}>
          <div>
            <input type="text" />
          </div>
          <button type="button">Login</button>
          <button type="button">Register</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
