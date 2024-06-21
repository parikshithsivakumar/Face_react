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
           
           <NavLink to="/"><img src={logo} alt="logo"></img></NavLink>
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
            <a href="https://amritaface.medium.com" target="_blank" rel="noopener noreferrer">Blog</a>
            </li>

            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/Events">Events</NavLink>
            </li>
            {/* <li >  
            <NavBtnLink type="button" to="/signup"> 
             Sign In
          </NavBtnLink>
           
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar