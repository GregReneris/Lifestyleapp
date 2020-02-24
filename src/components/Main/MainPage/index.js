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

    getActivities = event =>{
        console.log ("Getting Activites")
        API.getUser()
        .then(res => {
            // console.log(res.data)
            this.setState({userActivities: res.data.completedActivites})
        })
    };

    componentDidMount() {
        console.log("Component Did Mount is running")
        this.getActivities()
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
        let date = Date()
        console.log(date)
        API.getEvents(date)  
            .then(res => {
                this.setState({activities: res.data, activitiesOffset:0})
            })
    };

    handleAddEvent2Click = event => {
        // id.preventDefault();
        event.preventDefault()
        const eventId= event.target.getAttribute(`data-id`)
        // console.log ("Got Here **********")
        API.addEvent(eventId)  
        .then(res => {
            this.setState({selected: res.data})
            // console.log (res.data);
            this.getActivities();
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
    console.log("Got here RENDERING!")
    console.log(this.state.pageSize);
    
    return (
        <div>
            <div className="backgroundThree">
                <AppBar />
            <div className="test3">
                <Weather />
                <div className="cards">
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
                 </div>
                 <br/>
                 <br/>
                 
                 <div className="prevnext">
                     <div className="row">
                     <div className="col s3"></div>
                     <div className="col s3">
                    {this.state.activities.length>0?<Button style={{ background: "rgba(224,224,224)", height:"5vh"}} onClick = {this.prevPage} > 
                             <h5>Prev 4 Items</h5>
                    </Button>:null}
                    </div>
                    <div className="col s3">
                    {this.state.activities.length>0?<Button style={{ background: "rgba(224,224,224)", height:"5vh"}} onClick = {this.nextPage}> 
                        <h5>Next 4 Items</h5>
                    </Button>:null}
                    </div>
                    <div className="col s3"></div>
                    </div>
                </div>
                <Table id="wcom"
                    updateActivities={this.getActivities}
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


