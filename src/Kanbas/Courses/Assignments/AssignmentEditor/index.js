import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { updateAssignment } from "../assignmentsReducer";
import { useDispatch } from "react-redux";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const dispatch = useDispatch();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const [title, setTitle] = useState(assignment.title); 
  

  const { courseId } = useParams();
  const navigate = useNavigate();

  const handleSave = () => {
    // Dispatch the `updateAssignment` action to update the assignment
    dispatch(updateAssignment({...assignment,title}));

    // After saving, navigate back to the Assignments screen
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div>
      <h6>Assignment Name</h6>
      <input
        type="text"
        value={title}
        onChange={(e) =>{
          setTitle(e.target.value);
          }
        }
        className="form-control mb-2"
      />
      <hr />
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

export default AssignmentEditor;
