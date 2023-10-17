import { Link, useLocation } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import CourseNavigation from '../CourseNavigation';
import { Route, Routes, Na } from 'react-router-dom';
import Modules from "./Modules";

function Breadcrumbs() {
  const location = useLocation();

  return (
    <nav className='container'>
      <Link to="/Kanbas/Courses"
        className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"} style={{textDecoration: "none"}}
      >
          <GiHamburgerMenu style={{ fontSize: "24px", color:"red", margin: "10px"}}/>
          <span style={{ color: "red", fontSize: "20px", textDecoration: "none"}}> Courses </span>
      </Link>
    </nav>

   
    
    
    
  );
  
}

export default Breadcrumbs;