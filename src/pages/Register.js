import React from "react";
import { useRef } from "react";
import classes from "./Register.module.css";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';
import { render } from "react-dom";
import {Navigate} from "react-router-dom";

const Register=()=>{
  const[errors, setErrors] = useState('');
  const[user, setUser] = useState({
    nickname: "",
    email: "",
    password:""
  });
  const[state, setState] = useState(false);
  let navigate = useNavigate();

  const {nickname,email,password} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value});
  };

  async function register(){
    await axios.post("http://localhost:8000/api/register", user)
    .then(navigate('/login'))
  }

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="nickname">Enter your nickname</label>
        <input type="text" name = "nickname" value={nickname} onChange={e=>onInputChange(e)} required id="nickname"/>
      </div> 
      <div className={classes.control}>
        <label htmlFor="email">Enter your email</label>
        <input type="email" name = "email" value={email} onChange={e=>onInputChange(e)} required id="email" />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Enter your password</label>
        <input type="password" name = "password" value={password} onChange={e=>onInputChange(e)} required id="password"  />
      </div>
      <div className={classes.actions}>
        <button onClick={register}>Register</button>
      </div>
    </form>
  );
}

export default Register;
