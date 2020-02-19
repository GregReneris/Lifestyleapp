import React from 'react';
import "./style.css";
import Weather from '../Weather/index'
import AppBar from '../AppBar/index'
import Time from '../Time/index'
import EventType from '../EventType/index'
import Carousel from '../Carousel/index'
import Event from '../Event/index.js'
import Table from '../../Table/index'

function MainPage() {
    return (
        <div>
            <div className="mainimg">
                <AppBar />
                <Weather />
                <Time/>
                <EventType />
                <Carousel />
                <Event/>
                <Table id="wcom"/>

            </div>
        </div>
    );
}

export default MainPage;


