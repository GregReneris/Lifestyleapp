import React from 'react';
import '../App';
// import Navbar from '../components/Navbar/index'
// import LoginPage from './Login/index'
import Weather from './Main/Weather/index'
import AppBar from './Main/AppBar/index'
// import CreateAccount from './CreateAccount/index'
// import UserProfile from './UserProfile/index'
// import Table from './Table/index'

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <LoginPage/> */}
      <AppBar/>
      <Weather/>
      {/* <CreateAccount/> */}
      {/* <LoginPage/> */}
      {/* <UserProfile/> */}
      {/* <Table/> */}
    </div>
  );
}

export default App;


