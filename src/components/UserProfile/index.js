import React, { useState, useEffect, Component } from 'react';
import "./style.css";
import Button from '@material-ui/core/Button';
import Table from '../Table/index'
import AppBar from '../Main/AppBar/index'
import TextField from '@material-ui/core/TextField'
import API from "../../utils/api";




function UpdateAccount() {

  const [data, setdata] = useState({
    name: "",
    city: "",
  
  })

  useEffect(() => {
    API.isAuthenticated().then(res => {
      // console.log(res.data);
      
      setdata({
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

  return (
    <div>
      <div className="backgroundFour">
        <AppBar />
          <div className="topPart">
        <div className="test4">
          <div className="row">
            <div className="col sm-12">
              <h3 id="Hello"> Hello, {data.name}! </h3>
              {/* <h3>Hello,  {data.name} in {data.city}</h3> */}
              <br/>
            </div>
          </div>
          <div className="topSec">
          <div className="row">
            <div className="col sm-2 alignRight">
              <h5>Name:</h5>
            </div>
            <div className="col sm-8">
              <TextField
                id="outlined-password-input"
                label="name"
                type="text"
                autoComplete="current-name"
                //TODO: add variable for email pulled from db
                variant="outlined"
                value={data.name}
              />
            </div>
            <div className="col sm-2 alignLeft">
              <Button variant="contained">Update</Button>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col sm-2 alignRight">
              <h5>City:</h5>
            </div>
            <div className="col sm-8">
              <TextField
                id="outlined-password-input"
                label="City"
                type="text"
                autoComplete="current-City"
                //TODO: add variable for City pulled from db
                variant="outlined"
                value={data.city}
              />
            </div>
            <div className="col sm-2 alignLeft">
              <Button variant="contained">Update</Button>
            </div>
            </div>
            </div>
          </div>
        </div>
        <br />
      <br />
      <div className="tablething">
        <h4>Congratulations! You got off the couch so many times!</h4>
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