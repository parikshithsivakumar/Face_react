// Filename - components/Footer.js

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";
import { FaTwitter,FaFacebook,FaInstagram } from "react-icons/fa";



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
				A Computer Science Aspirants Club 
			</h1>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">
							Aim
						</FooterLink>
						<FooterLink href="#">
							Vision
						</FooterLink>
						<FooterLink href="#">
                            Campus
						</FooterLink>
                        <FooterLink href="#">
                            Blogs
						</FooterLink>
					</Column>
					<Column>
						<Heading>Events</Heading>
						<FooterLink href="#">
                        Current events
						</FooterLink>
						<FooterLink href="#">
                        All events
						</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">
							Email
						</FooterLink>
						<FooterLink href="#">
							Phone
						</FooterLink>
						<FooterLink href="#">
							Socials
						</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
                        <span
									style={{
										marginLeft: "10px",
									}}>
								<FaInstagram />
								</span>
						</FooterLink>
						<FooterLink href="#">
                        <span
									style={{
										marginLeft: "10px",
									}}>
								<FaFacebook />
								</span>
						</FooterLink>
						<FooterLink href="#">
                        
								<span
									style={{
										marginLeft: "10px",
									}}>
								<FaTwitter />
								</span>
							
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer;
