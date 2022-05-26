import { Link, resolvePath } from "react-router-dom";
import React from "react";
import classes from "./Login.module.css";
import axios from 'axios';
import {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";


const Login=()=>{
  const[user, setUser] = useState({
    email:"",
    password:"",
  });
  const navigate = useNavigate();
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value});
  };
 

  const login=(e)=>{
    e.preventDefault();
    const data = {
      email: user.email,
      password: user.password,
    }
    axios.post("http://localhost:8000/api/login", data).then(res=>{
      if(res.data.status === 200){
        localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("nickname", res.data.nickname);
        navigate('/home');
      }else if(res.data.status === 401){
        alert('Wrong credentials')
      }
    });
  }

  
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" name = "email" value={user.email} onChange={e=>onInputChange(e)} required id="email"  />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input type="password" name = "password" value={user.password} onChange={e=>onInputChange(e)} required id="password"  />
      </div>
      <div className={classes.clickable}>
        <div className={classes.links}>
          <Link to="/register">Don't have an account?</Link>
          <Link to="/forgotPsswd">Forgot your password?</Link>
        </div>
        <div className={classes.actions}>
          <button onClick={login}>Login</button>
        </div>
      </div>
    </form>
  )
}

export default Login;