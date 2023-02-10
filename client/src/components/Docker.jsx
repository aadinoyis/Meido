import { IoPersonOutline , IoBookOutline , IoHeartOutline, IoBandageOutline , IoMapOutline, IoMedical, IoLocateOutline, IoChatbox, IoChatboxOutline, IoPeopleOutline } from 'react-icons/io5';
import { NavLink } from "react-router-dom";

const Docker = () => {
    return (
        <div className="docker">
        <nav>
          <NavLink to="/doctors" className="docker_tab">
            <span className="icon"><IoPeopleOutline /></span>
            <span className="title">Doctors</span>
          </NavLink>
          <NavLink to="/" className="docker_tab">
            <span className="icon"><IoChatboxOutline /></span>
          </NavLink>
          <NavLink to="/map" className="docker_tab">
            <span className="icon"><IoLocateOutline/></span>
            <span className="title">Clinics</span>
          </NavLink>
        </nav>
      </div>
    )
}

export default Docker;