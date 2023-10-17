import db from "../../Database";
import { useParams } from "react-router-dom";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
        <div className = "row">
            <div className = "col-12">
            <h5 className= "float-end"> <button type="button" className="btn btn-light" style={{marginLeft:"10px"}}></button></h5>
            <h5 className= "float-end"> 
                <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{marginLeft: "10px"}}>
                      Export
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
            </h5>
            <h5 className= "float-end"> <button type="button" className="btn btn-light">Import</button></h5>
        </div>
        </div>
         <div className="col-10">
      <div className="row">
        <div className="col">
          <h5>Student Names</h5>
          <div className="col-sm-10">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search Students" />
              <button className="btn btn-outline-secondary" type="button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <h5>Assignment Names</h5>
          <div className="col-sm-10">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search Assignments" />
              <button className="btn btn-outline-secondary" type="button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ paddingTop: '10px' }}>
        <div className="col-sm-10">
          <button type="button" className="btn btn-light">
            <i className="fas fa-filter" style={{ color: '#535455' }}></i>Apply Filters
          </button>
        </div>
      </div>
    </div>
      <div className="table-responsive">
        <table className="table table-striped text-center">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>

          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td style={{color:"red"}}>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;

