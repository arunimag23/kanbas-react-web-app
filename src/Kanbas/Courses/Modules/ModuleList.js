import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "../Modules/ModuleList.css"


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
  
    <div className="col-8">
    <ul className="list-group-modules">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item-module">
             <h5>{module.name}</h5>
             <p>{module.description}</p>
           </li>
        
      ))
      }
    </ul>
    </div>
  );
}
export default ModuleList;