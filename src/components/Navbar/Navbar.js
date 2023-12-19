import { NavLink } from "react-router-dom";
import "./Navbar.css";
import homeIcon from "../../assets/images/home_icon.png";
import aboutIcon from "../../assets/images/about_icon.png";
import projectsIcon from "../../assets/images/projects_icon.png";
import contactIcon from "../../assets/images/contact_icon.png";

function Navbar() {
    return (
        <div className="navbar__container">
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="isActive">
                        <img className="nav_icon" src={homeIcon} alt="Home" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" style={({isActive})=>({
                        borderBottom: isActive ? "white solid 2px": '',
                        opacity: isActive ? 1 : ""
                    })}>
                        <img className="nav_icon" src={aboutIcon} alt="About" />
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" style={({isActive})=>({
                        borderBottom: isActive ? "white solid 2px": '',
                        opacity: isActive ? 1 : ""
                    })}>
                        <img className="nav_icon projects_icon" src={projectsIcon} alt="Projects" />
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" style={({isActive})=>({
                        borderBottom: isActive ? "white solid 2px": '',
                        opacity: isActive ? 1 : ""
                    })}>
                        <img className="nav_icon contact_icon" src={contactIcon} alt="Contact" />
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;