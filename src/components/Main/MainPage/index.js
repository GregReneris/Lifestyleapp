import React, {Component} from 'react';
import Weather from '../Weather/index'
import AppBar from '../AppBar/index'
import Time from '../Time/index'
import EventType from '../EventType/index'
import Carousel from '../Carousel/index'
import Event from '../Event/index.js'
import Table from '../../Table/index'
import API from '../../../utils/api'

import Button from '@material-ui/core/Button';

import "./style.css";

class MainPage extends React.Component {

        // changes needed to this state.
    state = {
      activities: [ ] 
    };

    componentDidMount() {
        // console.log("res")
        // API.getEvents()
        //   .then(res => { this.setState({activities: res.data}); })
        //   .catch(err => console.log(err));
      };

    handleHikeClick = event => {
        event.preventDefault();
        console.log("I'm running ths handleHikeClick");
    
        // this.setState({activities:activities});
    };
      
    handleEventClick = event => {
        event.preventDefault();
        console.log("I'm running handleEventClick");
        // if(className === btn1){
            API.getEvents()  
            .then(res => {
                this.setState({activities: res.data})
            })
        // }        
        // this.setState({activities:activities});
    };
    

      // .then(
      //   API.getWeather("seattle")
      //   .then(res) => {
      //     setdata = {res.data}
      //   }
      // )


  
render() {
    return (
        <div>

            <div className="mainimg">
                <AppBar />
                <Weather />
                <Time/>
       
                <EventType                  
                    eventClick={this.handleEventClick}
                    hikeClick={this.handleHikeClick}
                />
                <Carousel 
                    activities={this.state.activities}
                    // key = {activities.id}
                    // description = {activities.description}  
                    // activityName = {activities.activityName}                    
                />
                <Event/>
                <Table id="wcom"/>

            </div>
            <p className="copyright" alignitems="center"> Copyright © 2020 All Rights Reserved</p>
        </div>
    );
}


}

export default MainPage;


