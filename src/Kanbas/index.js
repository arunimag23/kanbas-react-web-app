import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import { useEffect } from "react";


function Kanbas() {
  const [courses, setCourses] = useState([]);
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;

  
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([ response.data,...courses
      ]);
    // setCourse({  name: "New Course", number: "New Number",
    // startDate: "2023-09-10", endDate: "2023-12-15"});

  };
  const deleteCourse = async (course) => {
    await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter((c) => c._id !== course._id));
  };
  const updateCourse = async(course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        } else {
          return c;
        }
      })
    );
    setCourse({name:""})
  };


  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={
          <Dashboard 
              courses={courses}
              setCourses={setCourses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
          />} />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          <Route path="Courses/" element={<Navigate to="RS101/Home" />} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;