import React, {useState} from 'react';
import {Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '../Main/AppBar/index'
import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function LoginPage (props) {
  const [login, setLogin] = useState({
      name: "",
      password: ""
  })
  const handleInputChange = event => {
      const { name, value } = event.target;
      setLogin({
          ...login,
          [name]: value
      })
  }
  const handleFormSubmit = event => {
      event.preventDefault();
      // API.login(login).then(res=>{
      //     console.log(res.data)
      // }).catch(err=>{
      //     console.log(err);
      // })
  }
    return (
      <div>
        <Link to='/'></Link>
        <AppBar/>
          <div className="container">
          <h3>Login</h3>
      <TextField
        id="outlined-password-input"
        label="Email"
        type="email"
        autoComplete="current-email"
        variant="outlined"
      />
      <br/>
      <br/>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />
      <br/>
      <br/>
      <Link to='/main'><Button variant="contained">Login</Button></Link>
      <br/>
      <Link to='/create'><h5>Create Account</h5></Link>
      <br/>
          </div>   
          <p class="copyright" alignItems="center"> Copyright © 2020 All Rights Reserved</p>
      </div>
    )
}

export default LoginPage;