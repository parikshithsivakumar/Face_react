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
  transition: color 0.3s ease, transform 0.3s ease;  /* Added transition */
  
  &.active {
    color: #5aefe7;
  }

  &:hover {
    color: #5aefe7;
    transform: scale(1.1);  /* Added scale transform for animation */
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
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  height: 100%;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  font-family: "Poppins", "serif", Times New Roman, Times;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out, transform 0.3s ease;  /* Added transition */

  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out, transform 0.3s ease;  /* Added transition */
    background: #5aefe7;
    color: #101720;
    transform: scale(1.1);  /* Added scale transform for animation */
  }

  @media screen and (max-width: 768px) {
    width: fit-content;
    background: #101720;
  }
`;

