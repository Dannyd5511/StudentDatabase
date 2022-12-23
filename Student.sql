Create database sys;

/*All the Creates for tables*/

CREATE TABLE `course` (
  `Course_ID` int NOT NULL,
  `Course_Name` varchar(45) DEFAULT NULL,
  `Course_Desc` varchar(45) DEFAULT NULL,
  `Credits` int DEFAULT NULL,
  `Dept_Code` int DEFAULT NULL,
  PRIMARY KEY (`Course_ID`));

CREATE TABLE `courselocation` (
  `Course_ID` int NOT NULL,
  `Location` varchar(45) DEFAULT NULL,
  `Days` varchar(45) DEFAULT NULL,
  `Time` time DEFAULT NULL,
  PRIMARY KEY (`Course_ID`)

CREATE TABLE `department` (
  `Dept_Code` int NOT NULL,
  `Dept_Name` varchar(45) DEFAULT NULL,
  `Budget` int DEFAULT NULL,
  `Administrator` int DEFAULT NULL,
  PRIMARY KEY (`Dept_Code`)

CREATE TABLE `instructor` (
  `Instructor_ID` int NOT NULL,
  `Instructor_Name` varchar(45) DEFAULT NULL,
  `Course_ID` int DEFAULT NULL,
  PRIMARY KEY (`Instructor_ID`)

CREATE TABLE `student` (
  `Student_ID` int NOT NULL,
  `First_Name` varchar(45) DEFAULT NULL,
  `Last_Name` varchar(45) DEFAULT NULL,
  `DoB` date DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Student_ID`)


CREATE TABLE `studentgrades` (
`Course_ID` int NOT NULL,
`Course_Name` varchar(45) DEFAULT NULL,
`Course_Desc` varchar(45) DEFAULT NULL,
`grade` int DEFAULT NULL,
PRIMARY KEY (`Course_ID`)


/*Inserting values into the table

course table:*/

INSERT INTO `sys`.`course` (`Course_ID`, `Course_Name`, `Course_Desc`, `Credits`, `Dept_Code`) VALUES (1001, 'CHE 102', 'Basic Chemistry', 4, 105),
INSERT INTO `sys`.`course` (`Course_ID`, `Course_Name`, `Course_Desc`, `Credits`, `Dept_Code`) VALUES (1002, 'MTH 305', 'Advanced Math', 4, 104),
INSERT INTO `sys`.`course` (`Course_ID`, `Course_Name`, `Course_Desc`, `Credits`, `Dept_Code`) VALUES (1003,'PHY 112','General Physics', 4, 105),
INSERT INTO `sys`.`course` (`Course_ID`, `Course_Name`, `Course_Desc`, `Credits`, `Dept_Code`) VALUES (1004,'MTH 111','Precalculus', 3, 104),
INSERT INTO `sys`.`course` (`Course_ID`, `Course_Name`, `Course_Desc`, `Credits`, `Dept_Code`) VALUES (1005,'ENG 202','Poetry', 3, 101),
INSERT INTO `sys`.`course` (`Course_ID`, `Course_Name`, `Course_Desc`, `Credits`, `Dept_Code`) VALUES (1006,'ENG 230','Composition', 3, 101),
INSERT INTO `sys`.`course` (`Course_ID`, `Course_Name`, `Course_Desc`, `Credits`, `Dept_Code`) VALUES (1007,'ECN 330','Microeconomics', 4, 102),
INSERT INTO `sys`.`course` (`Course_ID`, `Course_Name`, `Course_Desc`, `Credits`, `Dept_Code`) VALUES (1008,'ECN 340','Macroeconomics', 4, 102),
INSERT INTO `sys`.`course` (`Course_ID`, `Course_Name`, `Course_Desc`, `Credits`, `Dept_Code`) VALUES (1009,'CSC 305','Software Engineering', 4, 103),
INSERT INTO `sys`.`course` (`Course_ID`, `Course_Name`, `Course_Desc`, `Credits`, `Dept_Code`) VALUES (1010,'MTH 105','Trigonometry', 3, 104);

/*courselocation table:*/

INSERT INTO `sys`.`courselocation` ('Course_ID','Location', 'Days', 'Time') VALUES (1001,'Quinn Hall','MTW','10:00:00'),
INSERT INTO `sys`.`courselocation` ('Course_ID','Location', 'Days', 'Time') VALUES (1002,'Pastore Hall','MW','11:00:00'),
INSERT INTO `sys`.`courselocation` ('Course_ID','Location', 'Days', 'Time') VALUES (1003,'Fogarty Hall','TTH','10:15:00'),
INSERT INTO `sys`.`courselocation` ('Course_ID','Location', 'Days', 'Time') VALUES (1004,'Swan Hall','MWF','12:15:00'),
INSERT INTO `sys`.`courselocation` ('Course_ID','Location', 'Days', 'Time') VALUES (1005,'Woodward Hall','WF','01:30:00'),
INSERT INTO `sys`.`courselocation` ('Course_ID','Location', 'Days', 'Time') VALUES (1006,'Rodman Hall','TWF','02:45:00'),
INSERT INTO `sys`.`courselocation` ('Course_ID','Location', 'Days', 'Time') VALUES (1007,'Ballentine Hall','TTH','09:00:00'),
INSERT INTO `sys`.`courselocation` ('Course_ID','Location', 'Days', 'Time') VALUES (1008,'Bliss Hall','MWF','02:15:00'),
INSERT INTO `sys`.`courselocation` ('Course_ID','Location', 'Days', 'Time') VALUES (1009,'Chafee Social Science Center','MW','09:45:00'),
INSERT INTO `sys`.`courselocation` ('Course_ID','Location', 'Days', 'Time') VALUES (1010,'White Hall','MF','03:45:00');

/*department table:*/

INSERT INTO `sys`.`department` ('Dept_Code','Dept_Name','Budget','Administrator') VALUES (101,'English',200000,5),
INSERT INTO `sys`.`department` ('Dept_Code','Dept_Name','Budget','Administrator') VALUES (102,'Economics',300000,3),
INSERT INTO `sys`.`department` ('Dept_Code','Dept_Name','Budget','Administrator') VALUES (103,'Computer Science',750000,2),
INSERT INTO `sys`.`department` ('Dept_Code','Dept_Name','Budget','Administrator') VALUES (104,'Mathmatics',450000,4),
INSERT INTO `sys`.`department` ('Dept_Code','Dept_Name','Budget','Administrator') VALUES (105,'Engineering',500000,1);

/*instructor table:*/

INSERT INTO `sys`.`instructor` ('Instructor_ID','Instructor_Name','Course_ID') VALUES (13551,'Joe Royster',1001),
INSERT INTO `sys`.`instructor` ('Instructor_ID','Instructor_Name','Course_ID') VALUES (13552,'Erick Fernandez',1002),
INSERT INTO `sys`.`instructor` ('Instructor_ID','Instructor_Name','Course_ID') VALUES (13553,'Daniel Claudy',1003),
INSERT INTO `sys`.`instructor` ('Instructor_ID','Instructor_Name','Course_ID') VALUES (13554,'Blair Malet',1004),
INSERT INTO `sys`.`instructor` ('Instructor_ID','Instructor_Name','Course_ID') VALUES (13555,'Sabrina Monarrez',1005),
INSERT INTO `sys`.`instructor` ('Instructor_ID','Instructor_Name','Course_ID') VALUES (13556,'Karl Jacobs',1006),
INSERT INTO `sys`.`instructor` ('Instructor_ID','Instructor_Name','Course_ID') VALUES (13557,'Timo Werner',1007),
INSERT INTO `sys`.`instructor` ('Instructor_ID','Instructor_Name','Course_ID') VALUES (13558,'Jamal Hollack',1008),
INSERT INTO `sys`.`instructor` ('Instructor_ID','Instructor_Name','Course_ID') VALUES (13559,'Amber Gillian',1009),
INSERT INTO `sys`.`instructor` ('Instructor_ID','Instructor_Name','Course_ID') VALUES (13560,'Tristan Thomas',1010);

/*student table:*/

INSERT INTO `sys`.`student` ('Student_ID', 'First_Name','Last_Name','DoB','Email','Address') VALUES (1,'James','Hill','1995-12-02','Jhill@gmail.com','6649 N Blue Gum St'),
INSERT INTO `sys`.`student` ('Student_ID', 'First_Name','Last_Name','DoB','Email','Address') VALUES (2,'Josephine','Daeakjy','1996-11-03','Josephine_daeakjy@hotmail.com','4 B Blue Ridge Blvd'),
INSERT INTO `sys`.`student` ('Student_ID', 'First_Name','Last_Name','DoB','Email','Address') VALUES (3,'Art','Venere','1996-10-15','art@venere.org','8 W Cerritos Ave #54'),
INSERT INTO `sys`.`student` ('Student_ID', 'First_Name','Last_Name','DoB','Email','Address') VALUES (4,'Lenna','Paprocki','1997-06-26','lPaprocki@hotmail.com','639 Main St'),
INSERT INTO `sys`.`student` ('Student_ID', 'First_Name','Last_Name','DoB','Email','Address') VALUES (5,'Donette','Foller','1999-03-19','donette.foller@gmail.com','34 Center St'),
INSERT INTO `sys`.`student` ('Student_ID', 'First_Name','Last_Name','DoB','Email','Address') VALUES (6,'Simona','Morasca','1998-01-29','simona@morasca.com','3 Mcauley Dr'),
INSERT INTO `sys`.`student` ('Student_ID', 'First_Name','Last_Name','DoB','Email','Address') VALUES (7,'Kris','Marrier','2000-06-13','kmarrier@yahoo.com','228 Runamuck PL #2808'),
INSERT INTO `sys`.`student` ('Student_ID', 'First_Name','Last_Name','DoB','Email','Address') VALUES (8,'Abel','Maclead','2001-09-09','amaclead@gmail.com','372 Boston Ave #88'),
INSERT INTO `sys`.`student` ('Student_ID', 'First_Name','Last_Name','DoB','Email','Address') VALUES (9,'Bernardo','Figeroa','2001-12-01','figeroab@hotmail.com','153 Seaport St'),
INSERT INTO `sys`.`student` ('Student_ID', 'First_Name','Last_Name','DoB','Email','Address') VALUES (10,'William','Tell','2002-10-14','william.tell@gmail.com','370 Travel View Way');

/*Select all from student*/
SELECT * FROM sys.student;

/*Select all from course*/
SELECT * FROM sys.course;

/*Select all from courselocation*/
SELECT * FROM sys.courselocation;

/*Select all from department*/
SELECT * FROM sys.department;

/*Select all from instructor*/
SELECT * FROM sys.instructor;

/*Select all from studentgrades*/
SELECT * FROM sys.studentgrades;








  











