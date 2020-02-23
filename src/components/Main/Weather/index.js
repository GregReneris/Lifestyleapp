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
import Moment from 'react-moment';
import 'moment-timezone';
import Time from "../Time/index"


// const withStyles = makeStyles({
//   root: {
//     display: 'flex',
//     minWidth: 250,
//     flexDirection: "column",
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
//   media: {
//     height: 0,
//     paddingTop: '100%', // 16:9,
//     marginTop: '30'
//   }
// });


class Weather extends React.Component {
  state = {
    isLoading: false,
    temperature: 0,
    weatherCondition: null,
    error: null,
    name: "",
    city: "",
  };

  userAPICall() {
    API.getUser().then(res => {
      this.setState({
        name: res.data.name,
        city: res.data.city
      })
    }).catch(err => {
      console.log("'Error fetching and parsing data'")
      console.log(err.errorCode);
    })
  }

  weatherAPICall() {
    API.getWeather().then(res => {
      this.setState({
        weather: res.data,
      })
    }).catch(err => {
      console.log("'Error fetching weather'")
      console.log(err.errorCode);
    })
  }

  componentDidMount() {
    this.userAPICall();
    this.weatherAPICall();
  };


render() {

const date = new Date();
return (
  <div>
    <div className="myContainer">

      {/* <Typography id="hello"><h3> Hello, {data.name}.</h3></Typography>
      <Typography id="hello"><h3> Today's weather in {data.city} is: </h3></Typography>
      <h3><i class="wi wi-night-sleet"></i></h3> */}

      <br />
      <h4><Moment format="dddd da">
        <Time />
      </Moment>
        <br />
        <br />
        <Moment format="MMMM, DD YYYY">
          {date}
        </Moment></h4>
    </div>
  </div>
)
}};

export default Weather