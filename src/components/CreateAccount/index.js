import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '../Main/AppBar/index';
import API from "../../utils/api"
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
// import CitySearch from '../CitySearch';



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
  const history = useHistory();
  const [formdata, setformdata] = useState({
    name: "",
    password: "",
    email: "",
    city: ""
  })

  //TODO: HANDLE INPUT CHANGE for each input field in the form. 

  function handleSubmit(event) {
    event.preventDefault();
    // const data = new FormData(event.target)
    // console.log("got to handle submit");
    // console.log(formdata);
    fetch("https://lifestyleapi.herokuapp.com/api/auth/signup", {
      method: 'POST',
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formdata)
    })
      .then(event => {
        history.push("/login")
      }
      )
  }

  const [places, setPlaces] = useState([]);

  function handleInputChange(event) {
    // event.preventDefault()

    let newdata = { ...formdata }
    newdata[event.target.name] = event.target.value
    setformdata(newdata)

    //let newdata = [...event.state.formdata];
    // event.setState({ formdata: formdata});
    console.log(event.target.value);
    API.searchPlaces(event.target.value).then(res => {
      setPlaces(res.data)
      console.log(res.data)
    })

  };

  function updateCity() {

  }

  return (
    <div>
      <div className="backgroundTwo">
        <AppBar />
        <div className="test2">
          <div className="hello">
          <h3>Create Account</h3>
          </div>
          <form className={classes.root} noValidate autoComplete="off" >
            <TextField
              id="outlined-password-input"
              label="Name"
              name="name"
              type="text"
              autoComplete="current-name"
              variant="outlined"
              value={formdata.name}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <TextField
              id="outlined-password-input"
              label="Email"
              name="email"
              type="email"
              autoComplete="current-email"
              variant="outlined"
              value={formdata.email}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              variant="outlined"
              value={formdata.password}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <TextField
              id="outlined-password-input autocomplete"
              label="City"
              type="text"
              name="city"
              autoComplete="current-City"
              variant="outlined"
              value={formdata.city}
              onChange={handleInputChange}
            />
            {/* <CitySearch/> */}
            {/* {places.length > 0 ? (
              <div className="imgbox">
                {places.map((place, index) => (
                  <div key={index}>
                    <Button variant="contained" value="Create Profile" onClick={updateCity} >{place.structured_formatting.main_text}</Button>
                  </div>
                ))}
              </div>
            ) : (<div />)} */}

            <br />
            <br />
            <Link to='/login'><Button variant="contained" value="Create Profile" onClick={handleSubmit} >Submit</Button></Link>
            <br />
            <br />
          </form>
        </div>
        <p className="copyright" alignItems="center"> Copyright © 2020 All Rights Reserved</p>
      </div >
    </div >
  )
}

export default CreateAccount;