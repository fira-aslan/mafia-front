import React from "react";
import { useRef } from "react";
import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const keyInputRef = useRef();
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className={classes.main}>
      <div className={classes.key}>
        <div className={classes.control}>
          <label htmlFor="key">Enter invitation key</label>
          <input type="text" required id="key" ref={keyInputRef} />
        </div>
        <div className={classes.enter}>
          <button>Enter</button>
        </div>
      </div>
      <h2>OR</h2>
      <div className={classes.choose}>
        <button>Create a room</button>
        <h2>OR</h2>
        <button
          onClick={() => {
            navigate("/rooms");
          }}
        >
          Choose a random room
        </button>
      </div>
      <div className={classes.logout}>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
