import React from 'react';
import Weather from '../Weather/index'
import AppBar from '../AppBar/index'
import Time from '../Time/index'
import EventType from '../EventType/index'
import Carousel from '../Carousel/index'
import "./style.css";

function MainPage() {
    return (
        <div>
            <div className="mainimg">
                <AppBar />
                <Weather />
                <Time/>
                <EventType />
                <Carousel />
            </div>
        </div>
    );
}

export default MainPage;


