import React from 'react';
import { Navigate, Route, Routes, useParams, useLocation, Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import db from '../../Kanbas/Database';
import CourseNavigation from '../CourseNavigation/index.js';
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/AssignmentEditor';
import NewAssignmentEditor from './Assignments/NewAssignmentEditor';
import Grades from './Grades';

function Courses({ courses }) {
  const location = useLocation();
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const lastPathSegment = location.pathname.split('/').pop();

  return (
    <div className="col-12 container-fluid">
      <div className="row">
        <nav className="justify-content-end">
          <ul className="breadcrumb" style={{ fontSize: '20px', color: 'red' }}>
            <li className="breadcrumb-item" aria-current="page">
              <span style={{ paddingRight: '10px' }}>
                <GiHamburgerMenu />
              </span>
              <span style={{ paddingRight: '10px' }}>
                <Link to={'Home'} style={{ color: 'red', textDecoration: 'none' }}>
                  {course.name}{' '}
                </Link>
              </span>
            </li>
            {location.pathname.includes('/Assignments/') && (
              <>
                <li
                  className="breadcrumb-separator"
                  style={{
                    textDecoration: 'none',
                    color: 'grey',
                    fontSize: '20px',
                    paddingRight: '10px',
                  }}
                >
                  {'>'}
                </li>

                <li
                  className="breadcrumb-item"
                  aria-current="page"
                  style={{ color: 'red' }}
                >
                  {' '}
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Assignments`}
                    style={{ color: 'red', textDecoration: 'none', paddingRight: '10px' }}
                  >
                    Assignments
                  </Link>{' '}
                </li>
              </>
            )}
            <li
              className="breadcrumb-separator"
              style={{
                textDecoration: 'none',
                color: 'grey',
                fontSize: '20px',
                paddingRight: '10px',
              }}
            >
              {'>'}
            </li>
            <li className="breadcrumb-item" aria-current="page" style={{ color: 'black' }}>
              {' '}
              {lastPathSegment}{' '}
            </li>
          </ul>
        </nav>
      </div>

      <div className="row">
        <CourseNavigation />
      </div>

      <div
        className="overflow-y-scroll position-fixed bottom-0 end-0"
        style={{
          left: '320px',
          top: '50px',
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
          <Route path="NewAssignmentEditor" element={<NewAssignmentEditor />} />
          <Route path="Grades" element={<Grades/>} />
        </Routes>
      </div>
    </div>
  );
}

export default Courses;
