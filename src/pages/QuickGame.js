import React from "react";
import { useRef } from "react";
import classes from "./QuickGame.module.css";
import { useNavigate } from "react-router-dom";

function QuickGame() {
  const nicknameInputRef = useRef();
  let navigate = useNavigate();
  return (
    <div className={classes.main}>
      <div className={classes.key}>
        <div className={classes.control}>
          <label htmlFor="key">Enter invitation key</label>
          <input type="text" required id="key" ref={nicknameInputRef} />
        </div>
        <div className={classes.enter}>
          <button>Enter</button>
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="nickname">Enter nickname</label>
        <input type="text" required id="nickname" ref={nicknameInputRef} />
      </div>
      <h2>OR</h2>
      <div className={classes.choose}>
        <button
          onClick={() => {
            navigate("/chooseRoom");
          }}
        >
          Choose a random room
        </button>
      </div>
    </div>
  );
}

export default QuickGame;
