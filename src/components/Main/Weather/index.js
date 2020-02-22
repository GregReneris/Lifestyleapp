import React, { useState, useEffect, Component } from 'react';
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import API from "../../../utils/api";
import Date from "../Date/index"


const useStyles = makeStyles({
  root: {
    display: 'flex',
    minWidth: 250,
    flexDirection: "column",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9,
    marginTop: '30'
  }
});


export default function OutlinedCard() {
  const classes = useStyles();
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
      <div className="myContainer">
    
      {/* <Date/> */}
      <Typography id="hello"><h3> Hello,  {data.name}.</h3></Typography>
      <Typography id="hello"><h3> Today's weather in {data.city} is: </h3></Typography>
      <h3><i class="wi wi-night-sleet"></i></h3>
      
   
    </div>
    </div>
  );
}

