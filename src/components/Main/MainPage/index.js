import React, {Component} from 'react';
import Weather from '../Weather/index'
import AppBar from '../AppBar/index'
// import Date from '../Date/index'
import EventType from '../EventType/index'
import Carousel from '../Carousel/index'
import API from '../../../utils/api'
// import Event from '../Event/index.js'
import Table from '../../Table/index'
import Button from '@material-ui/core/Button';
import "./style.css";



class MainPage extends React.Component {

    state = {
        pageSize : 4,
        activities: [ ],
        activitiesOffset : 0,
        selected: [ ],
        userActivities: [],
    };


    componentDidMount() {
        API.getUser()
        .then(res => {
            // console.log(res.data)
            this.setState({userActivities: res.data.completedActivites})
        })
    };

    handleHikeClick = event => {
        event.preventDefault();
        console.log ("handleHikeClick Main Page")
        API.getHikes()  
        .then(res => {
            this.setState({activities: res.data, activitiesOffset:0})
        })
    };

    handleEventClick = event => {
        event.preventDefault();
        console.log ("handleEventClick Main Page")
        API.getEvents()  
        .then(res => {
            this.setState({activities: res.data, activitiesOffset:0})
        })
    };

    handleAddEvent2Click = event => { // non functional rn. Gosh.
        // id.preventDefault();
        event.preventDefault()
        const eventId= event.target.getAttribute(`data-id`)
        // console.log ("Got Here **********")
        API.addEvent(eventId)  
        .then(res => {
            this.setState({selected: res.data})
            // console.log (res.data);
            this.componentDidMount();
        })
    };


    nextPage = event => {
        let startIndex = this.state.activitiesOffset;
        // let endIndex = startIndex+ this.state.pageSize;

        if (startIndex + this.state.pageSize < this.state.activities.length )
        {
            this.setState({activitiesOffset: startIndex+this.state.pageSize})
        }
    }

    prevPage = event => {
        let startIndex = this.state.activitiesOffset;
        // let endIndex = startIndex- this.state.pageSize;

        if (startIndex > 0)
        {
            this.setState({activitiesOffset: startIndex-this.state.pageSize})
        }
    }
    



render() {

    return (
        <div>
            <div className="backgroundThree">
                <AppBar />
            <div className="test3">
                <Weather />
                {/* <Date/> */}
                <EventType  
                    eventClick={this.handleEventClick}
                    hikeClick={this.handleHikeClick}
                />
                <Carousel 
                
                    activities={this.state.activities}
                    selected={this.state.selected}
                    handleAdd2Event={this.handleAddEvent2Click}
                    offset = {this.state.activitiesOffset}
                    pageSize = {this.state.pageSize}

                 />
                    <Button onClick = {this.prevPage}> 
                        <span>
                             Prev 4 Items 
                        </span>
                    </Button>
                    <Button onClick = {this.nextPage}> 
                        <span>
                             Next 4 Items 
                        </span>
                    </Button>
                {/* <Event/> */}
                <Table id="wcom"
                    activities={this.state.userActivities}
                />
                </div>
            </div>
            <p className="copyright" alignitems="center"> Copyright © 2020 All Rights Reserved</p>
        </div>
    );
}

}

export default MainPage;


