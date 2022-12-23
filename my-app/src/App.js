import React, {useState, useEffect} from "react"; 
import './App.css';
import Axios from 'axios';
import StudentApp from "./Student";
import Course from "./Course";
import Enroll from "./Enroll";
import Home from "./home";
import { Route, Link } from "react-router-dom";
import NavBar from "./NavBar";




function App() {
  return(
    <div className="App">
      <NavBar />
      <Route exact path="/"component={Home}/>
      <Route exact path="/student" component={StudentApp} />
      <Route exact path="/course" component={Course}/>
      <Route exact path="/enroll" component={Enroll}/>
    </div>
  )
};


export default App;
