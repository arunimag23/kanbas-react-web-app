import { Link } from "react-router-dom";
import db from "../Database";
import "../Dashboard/dashboard.css"
import im from "../images/color1.jpg"
// import "../images/color2.jpg"
// import "../images/color3.png"

function Dashboard() {
  const courses = db.courses;


  return (
    <div className = "col-12 container">
                <h1> Dashboard</h1>
            <hr/>
            <h3 style={{"margin-left": "20px"}}> Published Courses (3) </h3>
            <hr/>
      <div className="d-flex flex-row flex-wrap card-deck">
        {courses.map((course) => (
          <div key={course._id} className="card" style={{"width":"250px"}}>
            <img src = {im} className="card-img-top" alt={`Image for ${course.name}`} />
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/Kanbas/Courses/${course._id}`} style={{ textDecoration: 'none' }}>
                    {course.name}
                </Link></h5>
              <p className="card-text">
                {course.number} <br />
                {course.startDate} <br />
                {course.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;