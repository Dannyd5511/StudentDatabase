import React, {useState, useEffect} from "react"; 
import Axios from 'axios';
import { Route, Link } from "react-router-dom";

function Enroll(){

    const [Course_ID, setCourseID] = useState("");
    const [Course_Name, setCourseName] = useState("");
    const [Course_Desc, setCourseDesc] = useState("");
    const [Credits, setCredits] = useState("");
    const [Dept_Code, setDeptCode] = useState("");
    const [Student_ID, setStudentID] = useState("");
    const [courseList, setCourseList] = useState([]);
    const [enrolledList, setEnrolledList] = useState([]);




    useEffect(() => {
      Axios.get("http://localhost:3001/api/classes").then((response) => {
        setCourseList(response.data);
      });
    }, [])

    useEffect(() => {
      Axios.get(`http://localhost:3001/api/enrollment`).then((response) => {
        setEnrolledList(response.data);
      });
    }, [])


    const submitEnrollment = () => {
  
      Axios.post("http://localhost:3001/api/insertenroll", {
        Course_ID: Course_ID,
        Student_ID: Student_ID
      });
      
    }

    return(

       <div className="App">

          <h1>Welcome to Enrollment!</h1>

          <div className="form">

          <label>Course ID:</label>
          <input type = "text" name = "Course_ID" onChange = {(e) => {
            setCourseID(e.target.value)
          }}/>
          <label>Student ID:</label>
          <input type = "text" name = "Student_ID" onChange = {(e) => {
            setStudentID(e.target.value)
          }}/>

          <button onClick={submitEnrollment}>Submit</button>

          </div>

          <div>
            <h1>CLASSES</h1>
          </div>

          <div className="results">


            
          {courseList.map((val) => {
            return (
              <div className="card">
                <h1>Course ID: {val.Course_ID}</h1>
                <p>Course Name: {val.Course_Name}</p>
                <p>Course_Desc: {val.Course_Desc}</p>
                <p>Credits: {val.Credits}</p>
                <p>Department Code:  {val.Dept_Code}</p>
              </div>
            )
          })}

          <div>
            <h1> Student Enrollment </h1>
            {/* <button onClick={setEnrollments}> TEST </button> */}
            </div>

          {enrolledList.map((val2) => {
            return(
              <div className="card">
                <h1>Student ID: {val2.Student_ID}</h1>
                <p>Course ID: {val2.Course_ID}</p>
              </div>
            )
          })}

          
          </div>


          <div>
            
          </div>
            

        </div>
          
    )
}

export default Enroll;