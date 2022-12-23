import React, {useState, useEffect} from "react"; 
import Axios from 'axios';
import { Route, Link } from "react-router-dom";


function StudentApp() {

    const [Student_ID, setStudentID] = useState("");
    const [First_Name, setFirstName] = useState("");
    const [Last_Name, setLastName] = useState("");
    const [DoB, setDoB] = useState("");
    const [Email, setEmail] = useState("");
    const [Address, setAddress] = useState("");
    const [studentList, setStudentList] = useState([]);  
    const [newStudent, setNewStudent] = useState("");
  
  
  
    useEffect(() => {
      Axios.get("http://localhost:3001/api/get").then((response) => {
        setStudentList(response.data);
      });
    }, [])

    // useEffect(() => {
    //     Axios.get("http://localhost:3001/api/classes").then((response) => {
    //       setCourseList(response.data);
    //     });
    //   }, [])
    
  
    const submitStudent = () => {
  
      Axios.post("http://localhost:3001/api/insert", {
        Student_ID: Student_ID, 
        First_Name: First_Name,
        Last_Name: Last_Name,
        DoB: DoB,
        Email: Email,
        Address: Address,
      });
  
      setStudentList([
        ...studentList, 
        { Student_ID: Student_ID, First_Name: First_Name, Last_Name: Last_Name, DoB: DoB, Email: Email, Address: Address},
      ]);
    };


    // const getClasses = () =>{
    //     Axios.get("http://localhost:3001/api/classes").then((response) => {
    //     setStudentList(response.data);
    //   });
    // }

    // setCourseList([
    //     ...courseList,
    //     {Course_ID: Course_ID, Course_Name: Course_Name, Course_Desc: Course_Desc, Credits: Credits, Dept_Code: Dept_Code },
    // ]);

  
  
    const deleteStudent = (First_Name) => {
      Axios.delete(`http://localhost:3001/api/delete/${First_Name}`)
    };
  
    const updateStudent = (Student_ID) => {
      Axios.put(`http://localhost:3001/api/update/${Student_ID}`,{ 
        name: newStudent,
        ID: Student_ID
      }).then((response) => {
        alert("update");
        }
      );
    };
  
  
    return (
      <div className="App">
  
        <h1> STUDENT APPLICATION</h1>
  
        <div className='form'>
          <label>Student ID:</label>
          <input type = "text" name = "Student_ID" onChange = {(e) => {
            setStudentID(e.target.value)
          }}/>
          <label>Student First Name: </label>
          <input type = "text" name = "First_Name" onChange = {(e) => {
            setFirstName(e.target.value)
          }} />
          <label>Student Last Name: </label>
          <input type = "text" name = "Last_Name" onChange = {(e) => {
            setLastName(e.target.value)
          }} />
          <label>Student DoB: </label>
          <input type = "text" name = "DoB" onChange = {(e) => {
            setDoB(e.target.value)
          }} />
          <label>Student Email: </label>
          <input type = "text" name = "Email" onChange = {(e) => {
            setEmail(e.target.value)
          }} />
          <label>Student Address: </label>
          <input type = "text" name = "Address" onChange = {(e) => {
            setAddress(e.target.value)
          }} />
  
          <button onClick={submitStudent}>Submit</button>
          </div>
          <div className="results">
          {studentList.map((val) => {
            return ( 
              <div className="card">
              <h1>Student ID: {val.Student_ID}</h1>
              <p>First Name: {val.First_Name}</p>
              <p>Last Name: {val.Last_Name}</p>
              <p>DoB: {val.DoB}</p>
              <p>Email:  {val.Email}</p>
              <p>Address: {val.Address}</p>
            
    
              <button 
                onClick={() => 
                  {deleteStudent(val.First_Name)}}>
  
                Delete
              </button>
  
              <input type="text" id="updateInput" onChange={(e)=>{
                setNewStudent(e.target.value);
              }}/>
              <button onClick={() => {updateStudent(val.Student_ID)}}>Update</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

export default StudentApp;