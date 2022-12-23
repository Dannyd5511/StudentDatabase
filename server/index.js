const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mysql = require("mysql");
const app = express();


// Creating the connection
const db = mysql.createPool({
    host: 'localhost',
    database: 'sys',
    user: 'root',
    password: 'Csc436!'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}))


//SELECT for students
app.get('/api/get', (req, res) => {

    const sqlSelect = "SELECT * FROM student";

    db.query(sqlSelect, (err, result)=>{
        res.send(result);
    })
})

//SELECT for Courses
app.get('/api/classes', (req, res) => {

    const sql = "SELECT * FROM course";

    db.query(sql, (err, result)=>{
        res.send(result);
    })
})

//SELECT for enrollment
app.get('/api/enrollment', (req, res) => {

    const enrollID = req.params.enrollID;
    
    const sqlEnroll = "Select * FROM enrollment";

    console.log(enrollID)
    
    db.query(sqlEnroll, enrollID, (err, result)=>{
        res.send(result);
    })
})


//Insert a student
app.post('/api/insert', (req, res) => {

    const Student_ID = req.body.Student_ID;
    const First_Name = req.body.First_Name;
    const Last_Name = req.body.Last_Name;
    const DoB = req.body.DoB;
    const Email = req.body.Email;
    const Address = req.body.Address;

    const sqlInsert = "INSERT INTO student (Student_ID, First_Name, Last_Name, DoB, Email, Address) VALUES (?,?,?,?,?,?)"

    db.query(sqlInsert, [Student_ID, First_Name, Last_Name, DoB, Email, Address], (err, result)=>{
        console.log(result);
    })
});

//Insert a class
app.post('/api/insertclass', (req, res) => {
    
    const Course_ID = req.body.Course_ID
    const Course_Name = req.body.Course_Name
    const Course_Desc = req.body.Course_Desc
    const Credits = req.body.Credits
    const Dept_Code = req.body.Dept_Code

    const sqlInsertclass = "INSERT INTO course (Course_ID, Course_Name, Course_Desc, Credits, Dept_Code) VALUES (?,?,?,?,?)"

    db.query(sqlInsertclass, [Course_ID, Course_Name, Course_Desc, Credits, Dept_Code], (err, result)=>{
        console.log(result);
    })
})

//Insert for Enrollment 
app.post('/api/insertenroll', (req, res) => {
    
    const Course_ID = req.body.Course_ID
    const Student_ID = req.body.Student_ID
   
    const sqlInsertenroll = "INSERT INTO enrollment (Course_ID, Student_ID) VALUES (?,?)"

    db.query(sqlInsertenroll, [Course_ID, Student_ID], (err, result)=>{
        console.log(result);
    })
})


//Delete for student
app.delete("/api/delete/:First_Name", (req, res)=>{
    const name = req.params.First_Name
    const sqlDelete = "DELETE FROM student WHERE First_Name = ?";

    db.query(sqlDelete, name, (err, result) =>{
        if (err){
           console.log(err) 
        } 
    })
})

//Delete for Course
app.delete("/api/deletecourse/:Course_Name", (req, res)=>{
    const nameCourse = req.params.Course_Name
    const sqlDeleteCourse = "DELETE FROM course WHERE Course_Name = ?";

    db.query(sqlDeleteCourse, nameCourse, (err, result) =>{
        if (err){
           console.log(err) 
        } 
    })
})

//Update for student
app.put("/api/update/:Student_ID", (req, res)=>{

    const ID = req.body.ID;
    const name = req.body.name;
    const sqlUpdate = "UPDATE student SET First_Name = ? WHERE Student_ID = ?";

    console.log(ID)
    console.log(name)

    db.query(sqlUpdate, [name,ID], (err, result) =>{
        if (err){
           console.log(err) 
        }
        else{
            res.send(result)
        }
    })
})

//Update for course
app.put("/api/updatecourse/:Course_ID", (req, res)=>{

    const ID2 = req.body.ID2;
    const name_course = req.body.name_course;
    const sqlUpdateCourse = "UPDATE course SET Course_Name = ? WHERE Course_ID = ?";

    console.log(ID2)
    console.log(name_course)

    db.query(sqlUpdateCourse, [name_course,ID2], (err, result) =>{
        if (err){
           console.log(err) 
        }
        else{
            res.send(result)
        }
    })
})

app.listen(3001, () =>{
    console.log("running on port 3001")
})