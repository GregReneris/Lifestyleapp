import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import '../App';
import "./style.css"
import LoginPage from './Login/index';
import CreateAccount from './CreateAccount/index'
import UserProfile from './UserProfile/index'
import MainPage from './Main/MainPage/index'
import Home from './Home/index'


function App() {
  return (
    <div className="App">

    <Router>
          <Switch>
            <Route path='/login'>
              <LoginPage/>
            </Route>
            <Route path ='/create'>
              <CreateAccount/>
            </Route>
            <Route path ='/profile'>
              <UserProfile/>
            </Route>
            <Route path ='/main'>
              <MainPage/>
            </Route>
          <Route exact path = '/'>
              <Home/>
            </Route>
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;


