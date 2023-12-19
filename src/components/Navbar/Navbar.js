import { NavLink } from "react-router-dom";
import "./Navbar.css";
import homeIcon from "../../assets/images/home_icon.png";
import aboutIcon from "../../assets/images/about_icon.png";
import projectsIcon from "../../assets/images/projects_icon.png";
import contactIcon from "../../assets/images/contact_icon.png";
import React, { useState, useEffect } from 'react';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0; // Change to a small value to detect any scroll
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`navbar_wrapper ${scrolled ? 'scrolled' : ''}`}>
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
                            <p className={"desktop"}>About</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" style={({isActive})=>({
                            borderBottom: isActive ? "white solid 2px": '',
                            opacity: isActive ? 1 : ""
                        })}>
                            <img className="nav_icon projects_icon" src={projectsIcon} alt="Projects" />
                            <p className={"desktop"}>Projects</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" style={({isActive})=>({
                            borderBottom: isActive ? "white solid 2px": '',
                            opacity: isActive ? 1 : ""
                        })}>
                            <img className="nav_icon contact_icon" src={contactIcon} alt="Contact" />
                            <p className={"desktop"}>Contact</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;