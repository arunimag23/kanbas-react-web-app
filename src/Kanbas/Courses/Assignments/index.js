import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {BiDotsVerticalRounded} from "react-icons/bi"
import { useSelector, useDispatch } from "react-redux";
import NewAssignmentEditor from "./NewAssignmentEditor";
import "../Assignments/assignments.css"
import { useEffect } from "react";
import {
  setAssignments,
  selectAssignment
} from "./assignmentsReducer";
import { findAssignmentsForCourse } from "./client";


function Assignments() {
  const { courseId } = useParams();
  useEffect(() => {
    findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);

  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();

  const handleAssignmentClick = (assignment) => {

    dispatch(selectAssignment(assignment));
  };
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
                        <Link to={`/Kanbas/Courses/${courseId}/NewAssignmentEditor`}>
                        <button type="button" className="btn btn-danger">
                          Assignment
                        </button>
                        </Link>
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
         {assignments
            .filter((assignment) => assignment.course === courseId)
            .map((assignment) => (
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="list-group-item-assignment"
                onClick={() => handleAssignmentClick(assignment)} // Handle assignment click
              >
                {assignment.title}
              </Link>
            ))}
      </div>
      </div>
    </div>
  );
}
export default Assignments;