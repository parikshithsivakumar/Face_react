// components/Navbar/index.js

import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo,
} from "./NavbarElements";
import logo from "./images/face-logo-final-removebg-preview.png";

const Navbar = () => {
  return (
    <>
      <Nav>
      <NavLink to="/"><NavLogo>
<img src={logo}  className="App-logo" alt="logo" />
</NavLogo></NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/events" activeStyle>
            Events
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
