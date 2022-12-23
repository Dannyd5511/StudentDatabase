 import React from "react";
 import {Link} from 'react-router-dom';

 function NavBar(){
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/student">Student</Link></li>
            <li><Link to="/course">Courses</Link></li>
            <li><Link to="/enroll">Enrollment</Link></li>
        </ul>
    )
 }
 
export default NavBar;