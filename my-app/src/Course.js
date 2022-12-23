import React, {useState, useEffect} from "react"; 
import Axios from 'axios';
import { Route, Link } from "react-router-dom";

function Course(){

    const [Course_ID, setCourseID] = useState("");
    const [Course_Name, setCourseName] = useState("");
    const [Course_Desc, setCourseDesc] = useState("");
    const [Credits, setCredits] = useState("");
    const [Dept_Code, setDeptCode] = useState("");
    const [courseList, setCourseList] = useState([]);
  
    const [newCourse, setNewCourse] = useState("");


    useEffect(() => {
        Axios.get("http://localhost:3001/api/classes").then((response) => {
          setCourseList(response.data);
        });
      }, [])
    
  
    const submitCourse = () => {
  
      Axios.post("http://localhost:3001/api/insertclass", {
        Course_ID: Course_ID, 
        Course_Name: Course_Name,
        Course_Desc: Course_Desc,
        Credits: Credits,
        Dept_Code: Dept_Code,
      });
  
      setCourseList([
        ...courseList,
        {Course_ID: Course_ID, Course_Name: Course_Name, Course_Desc: Course_Desc, Credits: Credits, Dept_Code: Dept_Code },
    ]);
    };
  
  
    const deleteCourse = (Course_Name) => {
      Axios.delete(`http://localhost:3001/api/deletecourse/${Course_Name}`)
    };
  
    const updateCourse = (Course_ID) => {
      Axios.put(`http://localhost:3001/api/updatecourse/${Course_ID}`,{ 
        name_course: newCourse,
        ID2: Course_ID
      }).then((response) => {
        alert("update");
        }
      );
    };
  
  
    return (
        <div className="App">
    
          <h1> COURSES</h1>

          <div className='form'>

          <label>Course ID:</label>
          <input type = "text" name = "Course_ID" onChange = {(e) => {
            setCourseID(e.target.value)
          }}/>
          <label>Course Name: </label>
          <input type = "text" name = "Course_Name" onChange = {(e) => {
            setCourseName(e.target.value)
          }}/>
          <label>Course Description: </label>
          <input type = "text" name = "Course_Desc" onChange = {(e) => {
            setCourseDesc(e.target.value)
          }}/>
          <label>Credits: </label>
          <input type = "text" name = "Credits" onChange = {(e) => {
            setCredits(e.target.value)
          }}/>
          <label>Department Code: </label>
          <input type = "text" name = "Dept_Code" onChange = {(e) => {
            setDeptCode(e.target.value)
          }} />

            <button onClick={submitCourse}>Submit</button>
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
            
                <button 
                    onClick={() => 
                    {deleteCourse(val.Course_Name)}}>
                    Delete
                </button>

                <input type="text" id="updateInput" onChange={(e)=>{
                setNewCourse(e.target.value);
              }}/>
              <button onClick={() => {updateCourse(val.Course_ID)}}>Update</button>


               </div>
            );
          })}
            
    


        </div>

    
        </div>
      );
}

export default Course;