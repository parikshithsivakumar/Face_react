// components/Navbar/navbarElements.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";



export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: "Times New Roman", Times, serif;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #5aefe7;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;



export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  height:100%;
  /* Third Nav */
  /* justify-content: flex-end;
width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;



export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  height:100%;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  font-family:  "Poppins" , "serif" , Times New Roman, Times;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #5aefe7;
    color: #101720;
    


  }
  @media screen and (max-width: 768px) {
    width:fit-content;
  
    background: #101720;


  }

`;


