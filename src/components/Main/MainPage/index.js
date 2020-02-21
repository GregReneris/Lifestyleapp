import React, {Component} from 'react';
import Weather from '../Weather/index'
import AppBar from '../AppBar/index'
import Time from '../Time/index'
import EventType from '../EventType/index'
import Carousel from '../Carousel/index'
import API from '../../../utils/api'
import Event from '../Event/index.js'
import Table from '../../Table/index'
import API from '../../../utils/api'

import "./style.css";

class MainPage extends React.Component {

        // changes needed to this state.
      state = {
      activities: [] 
    };

    handleOnClick = event => {
        event.preventDefault();
        console.log("I'm running ths button");
    
        // this.setState({activities:activities});
      };
    
      
      apiCallActivity = event => {
        event.preventDefault();
        console.log("I'm running API CALL BUTTON AAAYY");
        // if(className === btn1){
            API.getEvents()  
            .then(res => {
                console.log(res);
                this.setState({activities: res.data})
                console.log(res.data);
                console.log("I'm ACTIVITIES **************:" + activities);
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


class MainPage extends React.Component {

    state = {
        activities: [ ] 
    };


    componentDidMount() {
    };

    handleHikeClick = event => {
        event.preventDefault();
        event.preventDefault();
        API.getHikes()  
        .then(res => {
            this.setState({activities: res.data})
        })
    };

    handleEventClick = event => {
        event.preventDefault();
        API.getEvents()  
        .then(res => {
            this.setState({activities: res.data})
        })
    };


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
                // eventType={this.EventType}
                activities={this.state.activities}
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


