import React from 'react';
import '../App';
// import Navbar from '../components/Navbar/index'
// import LoginPage from './Login/index'
import Weather from './Main/Weather/index'
import AppBar from './Main/AppBar/index'
import Time from './Main/Time/index'
// import CreateAccount from './CreateAccount/index'
// import UserProfile from './UserProfile/index'
// import Table from './Table/index'
import EventType from './Main/EventType/index'
import Carousel from './Main/Carousel/index'

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <LoginPage/> */}
      <AppBar/>
      <Weather/>
      <Time/>
      <EventType/>
      <Carousel/>
      {/* <CreateAccount/> */}
      {/* <LoginPage/> */}
      {/* <UserProfile/> */}
      {/* <Table/> */}
    </div>
  );
}

export default App;


