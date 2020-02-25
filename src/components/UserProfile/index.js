import React, { useState, useEffect, Component } from 'react';
import "./style.css";
import Button from '@material-ui/core/Button';
import Table from '../Table/index'
import AppBar from '../Main/AppBar/index'
import TextField from '@material-ui/core/TextField'
// import CitySearch from "../CitySearch/index"
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
  
  const [userActivities, setActivities] = useState([])
  

  useEffect(() => {
    API.isAuthenticated().then(res => {
      console.log("USE EFFECT")
      console.log(res.data);

      setdata({
        id: res.data.id,
        name: res.data.name,
        city: res.data.city
      })

    }).catch(err => {
      console.log("'Error fetching and parsing data'")
      console.log(err.errorCode);
    })

    API.getUser().then(res => {
      setActivities( res.data.completedActivites )
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

  function updateCity(){

  }

  const getActivities = (event) => {
    console.log ("Getting Activites")
    API.getUser()
        .then(res => {     
          setActivities( res.data.completedActivites )
        })
  }

  return (
    <div>
      <div className="backgroundFour">
        <AppBar />
        <div className="topPart">
          <div className="test4">
            <div className="row">
              <div className="col sm-12">
                <div className="hello">
                <h3> Hello, {data.name}! </h3>
                </div>
                <br />
              </div>
            </div>
            <div className="topSec">
              <div className="row">
                <div className="col sm-6 alignRight">
                  <h4>Update name:</h4>
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
                  <h4>Update city:</h4>
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
          <div className="hello">
          <h3>Congratulations!</h3>
          </div>
          <h4>You got off the couch so many times!</h4>
          <Table  activities={userActivities}
                  updateActivities={getActivities}
          />
          <br />
        </div>
      </div>
      <p className="copyright" alignItems="center"> Copyright © 2020 All Rights Reserved</p>
    </div>

  );
}

export default UpdateAccount;
