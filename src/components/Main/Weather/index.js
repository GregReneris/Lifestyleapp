import React from 'react';
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
// import Time from "../Time/index"

class Weather extends React.Component {
  state = {
    newWeather: {},
    desc: {},
    icon: {},
    name: "",
    city: "",
  };

  userAPICall() {
    var promise = new Promise( (resolve, reject) => {
      API.isAuthenticated().then(res => {
        this.setState({
          name: res.data.name,
          city: res.data.city
        })
        resolve()
      }).catch(err => {
        console.log("'Error fetching and parsing data'")
        console.log(err.errorCode);
      })
     });
    return promise
  }

  weatherAPICall() {
    API.getWeather(this.state.city).then(res => {
      // console.log(res);
      this.setState({
        newWeather: res.data.weather,
        desc: res.data.desc,
        icon: res.data.icon,
        iconurl: "http://openweathermap.org/img/w/" + res.data.icon + ".png"
      })
        // console.log(this.state.newWeather);
    }).catch(err => {
      console.log("'Error fetching weather'")
      console.log(err.errorCode);
    })
  }

  componentDidMount() {
    this.userAPICall().then((res)=>{
      this.weatherAPICall();
    })  
    
  };


render() {

const date = new Date();
return (
  <div>
    <div className="myContainer">
    <div className="hello">
      <Typography><h3> Hello, {this.state.name}!</h3></Typography>
      <Typography><h3> Today's weather in {this.state.city} is: </h3></Typography>
     </div>
      <div id="icon"><h1><img src={this.state.iconurl} alt="Weather icon"/></h1></div>

      <Typography id="weather">
      {JSON.stringify(this.state.newWeather).replace(/"/g,"")}
      </Typography>
      <Typography id="weather2">
      You should expect to see {JSON.stringify(this.state.desc).replace(/"/g,"")} today.
      </Typography>

      <br />
      <h4><Moment format="dddd h:mm a">
        {/* <Time /> */}
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