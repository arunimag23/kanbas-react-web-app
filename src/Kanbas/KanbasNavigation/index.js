import { Link, useLocation } from "react-router-dom";
import "../../Kanbas/KanbasNavigation/index.css"
import { IoPersonCircle} from 'react-icons/io5';
import logo from '../images/NortheasternLogo.png';
import {AiFillDashboard, AiFillClockCircle, AiFillPlayCircle, AiFillQuestionCircle} from "react-icons/ai";
import {BiSolidBookBookmark, BiSolidGroup} from "react-icons/bi"
import {BsFillCalendarEventFill, BsFillInboxFill, BsFillArrowRightCircleFill} from "react-icons/bs"


function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const icons = [
    { label: "Account", icon: IoPersonCircle },
    { label: "Dashboard", icon: AiFillDashboard },
    { label: "Courses", icon: BiSolidBookBookmark },
    { label: "Group", icon: BiSolidGroup },
    { label: "Calendar", icon: BsFillCalendarEventFill },
    { label: "Inbox", icon: BsFillInboxFill },
    { label: "History", icon: AiFillClockCircle },
    { label: "Studio", icon: AiFillPlayCircle },
    { label: "Commons", icon: BsFillArrowRightCircleFill },
    { label: "Help", icon: AiFillQuestionCircle },
  ];
    const { pathname } = useLocation();
    return (
      <div className="list-group kanbas-navigation-list-group" style={{ width: 75 }}>
        <div> <img className="northeastern-logo list-group-item-action menu-item-text" src= {logo} alt="Logo"/> </div>
        {links.map((link, index) => {
            const iconObj = icons.find((icon) => icon.label === link);
            return(
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item list-group-item-action menu-item-text ${pathname.includes(link) && "active"}`}>
            <div className="kanbas-navigation-icon">
            {iconObj && (
                  <iconObj.icon style={{ color: link === "Account" ? "grey" : "red" }} />
            )}
            </div>
            <div className="kanbas-navigation-label">{link}</div>
          </Link>
            )})}
      </div>
    );
  }
  export default KanbasNavigation;