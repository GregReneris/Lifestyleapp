import React,{useEffect} from 'react';
import API from './utils/api'
// import logo from './logo.svg';
import './App.css';
import Container from "../src/components/Container"

function App() {
  useEffect(()=>{
    API.isAuthenticated().then(data=>{
      console.log(data)
    }).catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div className="App">
      <Container/>
    </div>
  );
}

export default App;
