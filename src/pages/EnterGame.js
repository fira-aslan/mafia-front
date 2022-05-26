import React from "react";
import classes from "./EnterGame.module.css";
import { useNavigate } from "react-router-dom";

function EnterGame() {
  let navigate = useNavigate();
  return (
    <div className={classes.main}>
      <div className={classes.logo}>The Mafia </div>
      <div className={classes.clickable}>
        <div className={classes.actions}>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              navigate("/quickGame");
            }}
          >
            Enter a quick game
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnterGame;
