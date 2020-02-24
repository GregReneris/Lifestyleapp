import React from 'react';
import "./style.css";
import Typography from '@material-ui/core/Typography'
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
    temp: 0,
  };

  userAPICall() {
    return new Promise( (resolve, reject) => {
      API.isAuthenticated().then(res => {
        this.setState({
          name: res.data.name,
          city: res.data.city
        })
        resolve(res.data.city)
      }).catch(err => {
        console.log("'Error fetching and parsing data'")
        reject(err.errorCode);
      })
     });
  }

  weatherAPICall(city = "seattle") {
    API.getWeather(city).then(res => {
      console.log(res.data);
      this.setState({
        newWeather: res.data.weather,
        desc: res.data.desc,
        icon: res.data.icon,
        iconurl: "http://openweathermap.org/img/w/" + res.data.icon + ".png",
        temp: res.data.temp
      })
        // console.log(this.state.newWeather);
    }).catch(err => {
      console.log("'Error fetching weather'")
      console.log(err.errorCode);
    })
  }

  componentDidMount() {
    this.userAPICall().then((res)=>{
      this.weatherAPICall(res);
    })  
    
  };


render() {

const date = new Date();
return (
  <div>
    <div className="myContainer">
<div className="hello">
      <Typography> <h3> Hello, {this.state.name}</h3></Typography>
      <Typography><h3> Weather in {this.state.city} is: </h3></Typography>
      <Typography><h3>{Math.trunc(this.state.temp)} ° F</h3></Typography>
      <div id="icon"><img src={this.state.iconurl} alt="Weather icon"/></div>
</div>
      <Typography id="weather">
      {JSON.stringify(this.state.newWeather).replace(/"/g,"")}
      </Typography>
      <Typography id="weather2">
      expect {JSON.stringify(this.state.desc).replace(/"/g,"")}
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