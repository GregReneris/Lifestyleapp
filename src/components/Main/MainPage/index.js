import React from 'react';
import Weather from '../Weather/index'
import AppBar from '../AppBar/index'
import Time from '../Time/index'
import EventType from '../EventType/index'
import Carousel from '../Carousel/index'
import API from '../../../utils/api'
import Event from '../Event/index.js'
import Table from '../../Table/index'

import "./style.css";



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
                <AppBar />
            <div className="backgroundThree">
            <div className="test3">
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
            </div>
            <p className="copyright" alignitems="center"> Copyright © 2020 All Rights Reserved</p>
        </div>
    );
}

}

export default MainPage;


