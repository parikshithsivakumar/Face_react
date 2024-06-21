import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const BtnLink = styled(Link)`
  color: #5aefe7;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: "Times New Roman", Times, serif;
  padding-top: 1rem;
  width: fit-content;
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