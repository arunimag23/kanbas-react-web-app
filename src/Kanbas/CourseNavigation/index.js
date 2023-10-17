import { Link, useParams, useLocation } from "react-router-dom";
import "../CourseNavigation/courses.css"


function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list-group-courses" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item-course list-group-item-action-course ${pathname.includes(link) && "active"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}


export default CourseNavigation;