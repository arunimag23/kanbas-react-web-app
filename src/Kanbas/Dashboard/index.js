import { Link } from "react-router-dom";
import db from "../Database";
import "../Dashboard/dashboard.css"
import im from "../images/color1.jpg"
import { useState } from "react";
// import "../images/color2.jpg"
// import "../images/color3.png"

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  
){
 


  return (
    <div className = "col-12 container">
                <h1> Dashboard</h1>
            <hr/>
            <h3 style={{"margin-left": "20px"}}> Published Courses (3) </h3>
            <hr/>
            <input value={course.name} className="form-control" 
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control" 
            onChange={(e) => setCourse({ ...course, number: e.target.value }) }/>
            <input value={course.startDate} className="form-control" type="date" 
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input style = {{marginBottom: "20px"}} value={course.endDate} className="form-control" type="date" 
            onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }/>
            <button type="button" className="btn btn-success" onClick={addNewCourse} style = {{marginBottom: "20px", marginRight:"10px"}}>
            Add
            </button>
            <button className="btn btn-light" onClick={(event) => {event.preventDefault();
                                              updateCourse(course)}} style = {{marginBottom: "20px"}}>
            Update
            </button>


      <div className="d-flex flex-row flex-wrap card-deck">
        {courses.map((course, index) => (
          <div key={course._id} className="card" style={{"width":"250px"}}>
            <img src = {im} className="card-img-top" alt={`Image for ${course.name}`} />
            <div className="card-body">
              <h5 className="card-title">
                <Link 
                key = {index}
                to={`/Kanbas/Courses/${course._id}`} style={{ textDecoration: 'none' }}>
                    {course.name}



                </Link></h5>
              <p className="card-text">
                {course.number} <br />
                {course.startDate} <br />
                {course.endDate}
              </p>
              <div>
              <button type="button" className="btn btn-danger"
                onClick={(event) => {
                event.preventDefault();
                deleteCourse(course);
                }}>
                Delete
              </button>
              <button type="button" className="btn btn-light"
                onClick={(event) => {
                event.preventDefault();
                setCourse(course);
                }}>
                Edit
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Dashboard;