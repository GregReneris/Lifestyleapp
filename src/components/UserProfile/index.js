import React, { useState, useEffect, Component } from 'react';
import "./style.css";
import Button from '@material-ui/core/Button';
import Table from '../Table/index'
import AppBar from '../Main/AppBar/index'
import TextField from '@material-ui/core/TextField'
import API from "../../utils/api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";




function UpdateAccount() {

  const [data, setdata] = useState({
    id: "",
    name: "",
    city: "",

  })

  useEffect(() => {
    API.isAuthenticated().then(res => {
      console.log(res.data);

      setdata({
        id: res.data.id,
        name: res.data.name,
        city: res.data.city
      })


      // .then(
      //   API.getWeather()
      //   .then(res) => {
      //     setdata = {res.data}
      //   })


    }).catch(err => {
      console.log("'Error fetching and parsing data'")
      console.log(err.errorCode);
    })
  }, [])

  const inputChangeName = (event) => {
    let value = event.target.value

    setdata({
      id: data.id,
      name: value,
      city: data.city
    })

  }

  const inputChangeCity = (event) => {
    let value = event.target.value

    setdata({
      id: data.id,
      name: data.name,
      city: value
    })
  }
  const updateUser = id => {
    console.log(id)


    console.log(data.name, data.city)
    const newUserData = {
      id: id,
      name: data.name,
      city: data.city
    }
    API.putUser(newUserData)
  }

  const [places, setPlaces] = useState([]);

  
  function updateCity() {

  }

  return (
    <div>
      <div className="backgroundFour">
        <AppBar />
        <div className="topPart">
          <div className="test4">
            <div className="row">
              <div className="col sm-12">
                <h3 id="Hello"> Hello, {data.name}! </h3>
                <br />
              </div>
            </div>
            <div className="topSec">
              <div className="row">
                <div className="col sm-6 alignRight">
                  <h5>Update username:</h5>
                </div>
                <div className="col sm-6 alignLeft">
                  <TextField
                    id="outlined-password-input"
                    label="name"
                    type="text"
                    autoComplete="current-name"

                    variant="outlined"
                    name="name"
                    value={data.name}
                    onChange={inputChangeName}
                  />
                </div>
              </div>
              <br />
                <div className="row">
                <div className="col sm-6 alignRight">
                  <h5>Update city:</h5>
                </div>
                <div className="col sm-6 alignLeft">
                  <TextField
                    id="outlined-password-input"
                    label="City"
                    type="text"
                    name="city"
                    autoComplete="current-City"
                    variant="outlined"
                    value={data.city}
                    onChange={inputChangeCity}
                  />
                  {places.length > 0 ? (
              <div className="imgbox">
                {places.map((place, index) => (
                  <div key={index}>
                    <Button variant="contained" value="Create Profile" onClick={updateCity} >{place.structured_formatting.main_text}</Button>
                  </div>
                ))}
              </div>
            ) : (<div />)}
                </div> 
              </div>
              <br />
              <div className="row">
              <div className="col sm-12">
                    <Button variant="contained" data-id={data.id} onClick={() => { updateUser(data.id) }} >Update</Button>
              </div>
            </div>
            </div>
          </div>
        </div>
        
        
        <br />
        <br />
        <div className="tablething">
          <strong><h3>Congratulations!</h3></strong>
          <h4>You got off the couch so many times!</h4>
          <Table />
          <br />
        </div>
      </div>
      <p className="copyright" alignItems="center"> Copyright © 2020 All Rights Reserved</p>
    </div>

  );
}

export default UpdateAccount;


/* 
        <h5>Email:  
        <TextField
          id="outlined-password-input"
          label="Email"
          type="email"
          autoComplete="current-email"
          //TODO: add variable for email pulled from db
          variant="outlined"
        /></h5>
        <Button variant="contained">Update</Button>
        <h5>City:
        <TextField
          id="outlined-password-input"
          label="City"
          type="number"
          autoComplete="current-City"
           //TODO: add variable for City pulled from db
          variant="outlined"
        /></h5>
        <Button variant="contained">Update</Button>
        <br/>
        <br/>
        <h5>Congratulations! You got off the couch so many times. You should be proud.</h5>
        <Table/>
            </div>   
        </div> */
{/* )} */ }