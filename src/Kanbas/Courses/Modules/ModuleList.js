import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";
import "./ModuleList.css";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client"

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };


  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };


  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group-modules">
      <li className="list-group-item-edit">
      
        <input style={{marginBottom:"10px", marginRight:"10px"}}
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <button type="button" className="btn btn-light" style={{marginRight:"10px", marginBottom:"10px"}} onClick={handleUpdateModule}>Update</button>
        <button type="button" className="btn btn-success" style={{marginBottom:"10px"}}
          onClick={handleAddModule}
        >
          Add
        </button>
        <br/>
        <textarea style={{width:"350px"}}
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item-module">
            <button style = {{marginLeft:"10px"}} type="button" className="btn btn-light float-end" onClick={() => dispatch(setModule(module))}>Edit</button>
            <button className="btn btn-danger float-end" onClick={() => handleDeleteModule(module._id)}>
              Delete
            </button>
            <h4>{module.name}</h4>
            <p>{module.description}</p>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;