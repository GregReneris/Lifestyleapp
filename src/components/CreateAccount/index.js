import React, {useState} from 'react';
import "./style.css";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '../Main/AppBar/index';
import API from "../../utils/api"



const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function CreateAccount(props) {
  const classes = useStyles();

  const [formdata, setformdata] = useState ({
    name : "",
    password : "",
    email : "",
    city : ""
  })    
  // console.log ("FORM DATA")
  // console.log (formdata);
  // console.log ("SET FORM DATA")
  // console.log (setformdata);
  
  

  //TODO: HANDLE INPUT CHANGE for each input field in the form. 

  function handleSubmit(event) {
    event.preventDefault();
    // const data = new FormData(event.target)
  console.log ("got to handle submit");
  console.log(formdata);
    fetch("http://localhost:8080/api/auth/signup", {
      method: 'POST',
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(formdata)
    });
  }
  
function handleInputChange (event) {
    event.preventDefault()
    // console.log(event.target.name);
    // console.log(event.target.value);
    let newdata = {...formdata}
    newdata[event.target.name] = event.target.value
    setformdata(newdata)
    // console.log (event.target.username.value); 
    // console.log (event.target.elements.username.value); 
    // console.log (event.target.value);
    
    //let newdata = [...event.state.formdata];
    // event.setState({ formdata: formdata});
    
    
  };

  return (
    <div>
      <AppBar/>
      
      <div className="container">
        <h3>Create Account</h3>

        <form className={classes.root} noValidate autoComplete="off" >
          <TextField
            id="outlined-password-input"
            label="Name"
            name = "name"
            type="text"
            autoComplete="current-name"
            variant="outlined"
            value={formdata.name}
            onChange = {handleInputChange}
          />
          <br />
          <br />
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
          <br />
          <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            name = "password"
            autoComplete="current-password"
            variant="outlined"
            value={formdata.password}
            onChange = {handleInputChange}
          />
          <br />
          <br />
          <TextField
            id="outlined-password-input"
            label="City"
            type="text"
            name = "city"
            autoComplete="current-City"
            variant="outlined"
            value={formdata.city}
            onChange = {handleInputChange}
          />
          <br />
          <br />
          <Button variant="contained" value="Create Profile" onClick={handleSubmit} >Submit</Button>
          <br />
          <br />
        </form>
      </div>
      <p class="copyright" alignItems="center"> Copyright © 2020, all rights reserved</p>
    </div>
  )
}

export default CreateAccount;