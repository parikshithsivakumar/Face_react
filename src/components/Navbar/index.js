// components/Navbar/index.js

import React,{ useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo,
} from "./NavbarElements";
import { Link } from "react-router-dom"; 
import logo from "./images/face-logo-final-removebg-preview.png";
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
           <img src={logo} alt="logo"></img>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Bars />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>

            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li >  
            <NavBtnLink type="button" to="/signup"> 
             Sign In
          </NavBtnLink>
           
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar