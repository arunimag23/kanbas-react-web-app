import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {BiDotsVerticalRounded} from "react-icons/bi"
import "../Assignments/assignments.css"


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <div className="row">
      <div className="col-8">
      <div class="w-25">
                <input type="text" class="form-control" id="input1" placeholder="Search Assignments"></input>
      </div>
      </div>
      <div className="col-4">
      <ul class="nav nav-tabs">
                        <button type="button" class="btn btn-light">Group</button>
                        <button type="button" class="btn btn-danger">Assignment</button>
                        <button type ="button" class ="btn btn-light"><BiDotsVerticalRounded /></button>
      </ul>
      </div>
      
      </div>
      <hr/>
       

      {/* <h2>Assignments for course {courseId}</h2> */}
      <div className="col-12">
      <div className="list-group">
        <div className="list-group-item-secondary">
          <h6>ASSIGNMENTS</h6>
        </div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item-assignment">
            {assignment.title}
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}
export default Assignments;