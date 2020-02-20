import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '../Main/AppBar/index'
import API from "../../utils/api"
import "./style.css";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function LoginPage (props) {
  const classes = useStyles();
  const history = useHistory();
  const [formdata, setformdata] = useState({
      email: "",
      password: ""
  })
  


  const handleSubmit = event => {
      event.preventDefault();
   // const data = new FormData(event.target)
   console.log ("got to handle submit");
   console.log(formdata);
    //  fetch("http://localhost:8080/api/auth/login", {
    //    method: 'POST',
    //    headers: {
    //      "Accept": "application/json, text/plain, */*",
    //      "Content-Type" : "application/json"
    //    },
    //    body: JSON.stringify(formdata
    API.login(formdata).then(event =>{
       history.push("/main")
     })
  }

  function handleInputChange (event) {
    event.preventDefault()
    console.log(event.target.name);
    console.log(event.target.value);
    let newdata = {...formdata}
    newdata[event.target.name] = event.target.value
    setformdata(newdata)
    // console.log (event.target.email.value); 
    // console.log (event.target.elements.password.value); 
  };

  
    return (
      <div>
        <Router>
        <Link to='/'></Link>
        <AppBar/>
          <div className="container">
          <h3>Login</h3>
          <form className={classes.root} noValidate autoComplete="off" >
      <TextField
          id="outlined-password-input"
          label="Email"
          name = "email"
          type="email"
          autoComplete="current-email"
          variant="outlined"
          value={formdata.email}
          onChange = {handleInputChange}
      />
      <br/>
      <br/>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        name = "password"
        value={formdata.password}
        onChange = {handleInputChange}
      />
      <br/>
      <br/>
      <Link to='/main'><Button variant="contained" onClick={handleSubmit}>Login</Button></Link>
      <br/>
      <Link to='/create'><h5>Create Account</h5></Link>
      <br/>
      </form>
          </div>   
          <p class="copyright" alignItems="center"> Copyright © 2020 All Rights Reserved</p>
          </Router>
      </div>
    )
}

export default LoginPage;