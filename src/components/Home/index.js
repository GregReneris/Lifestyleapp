import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
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
import Ratings from "../Ratings/index"


function Home(props) {
  
  return (
    <div>

      <Link to='/'></Link>
      <div className="backgroundOne">
        <AppBar />
        <br/>
        <div className="hello">
        <h3>Make every day an adventure.</h3>
        </div>
        <br/>
        <br/>
            <Link to='/login'><Button variant="contained">Login</Button></Link>
        
        </div>
        <p className="copyright" alignItems="center"> Copyright © 2020 All Rights Reserved</p>

      </div>

  )
}

export default Home;