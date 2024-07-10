// Filename - components/Footer.js

import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  FooterLink1,
  Heading,
} from "./FooterStyles";
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "whitesmoke",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Forum Of Aspiring Computer Engineers Club
      </h1>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/about">Vision</FooterLink> {/* Corrected Link */}
            <FooterLink href="https://www.amrita.edu/campus/bengaluru/">
              Campus
            </FooterLink>{" "}
            {/* Corrected Link */}
            <FooterLink href="https://amritaface.medium.com/" target="_blank">
              Blogs
            </FooterLink>
          </Column>
          <Column>
            <Heading>Events</Heading>
            <FooterLink href="/events">Current events</FooterLink>{" "}
            {/* Corrected Link */}
            <FooterLink href="/events">All events</FooterLink>{" "}
            {/* Corrected Link */}
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="mailto:FaceASEB@gmail.com">
              FaceASEB@gmail.com
            </FooterLink>
            <FooterLink1>Ph: +91 63641-51707</FooterLink1>
            <FooterLink href="./contributors.html" target="_blank">
              Contributors
            </FooterLink>{" "}
            {/* Corrected Link */}
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.instagram.com/face_aseb/">
              <span
                style={{
                  marginLeft: "10px",
                }}
              >
                <FaInstagram />
              </span>
            </FooterLink>
            {/* <FooterLink href="#">
              <span
                style={{
                  marginLeft: "10px",
                }}
              >
                <FaFacebook />
              </span>
            </FooterLink> */}
            <FooterLink href="https://chat.whatsapp.com/CBePP2Q2moR4PuQUQqyxVB">
              <span
                style={{
                  marginLeft: "10px",
                }}
              >
                <FaWhatsapp />
              </span>
            </FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
