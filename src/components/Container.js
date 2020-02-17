import React from 'react';
import '../App';
// import Navbar from '../components/Navbar/index'
// import LoginPage from './Login/index'
import Weather from './Main/Weather/index'
import AppBar from './Main/AppBar/index'

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <LoginPage/> */}
      <AppBar/>
      <Weather/>
    </div>
  );
}

export default App;
