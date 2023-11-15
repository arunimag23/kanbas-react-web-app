import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { addAssignment } from "../assignmentsReducer"; // Import actions
import {createAssignment} from "../client"; 
import { useDispatch } from "react-redux";


function NewAssignmentEditor() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [assignment, setAssignment] = useState({
    title: "New Assignment",
    course: courseId,
    description: "",
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
  });


  const handleSave = () => {

    createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });


    // After saving, navigate back to the Assignments screen.
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div>
      <h6>Assignment Name</h6>
      <input
        type="text"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        className="form-control"
      />
      <h6>Description</h6>
      <textarea
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        className="form-control"
      />
      <h6>Due Date</h6>
      <input
        type="date"
        value={assignment.dueDate}
        onChange={(e) =>
          setAssignment({ ...assignment, dueDate: e.target.value })
        }
        className="form-control"
      />
      <h6>Available From Date</h6>
      <input
        type="date"
        value={assignment.availableFromDate}
        onChange={(e) =>
          setAssignment({ ...assignment, availableFromDate: e.target.value })
        }
        className="form-control"
      />
      <h6>Available Until Date</h6>
      <input
        type="date"
        value={assignment.availableUntilDate}
        onChange={(e) =>
          setAssignment({ ...assignment, availableUntilDate: e.target.value })
        }
        className="form-control"
      />
      <div className="float-end">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger me-2">
          Save
        </button>
      </div>
    </div>
  );
}

export default NewAssignmentEditor;
