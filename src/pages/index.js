// pages/index.js

import React from "react";
import './index.css';
import image from '../static/imgs/hero-img.jpg';
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  return (
    <div>
      <header>
        {/* Your header content */}
      </header>
      <main className="main-page-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to the <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'FACE Club!',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '1.5em', display: 'inline-block',color:"#5aefe7" }}
                  repeat={Infinity} /></h1>
            <p>Join us for exciting discussions, events, and collaborative learning.</p>
            <button className="join-button">Join Now</button>
          </div>
          <div className="hero-image">
            {/* <img src={image} alt="Hero Image" height={400} width={400} style={{boxShadow: "0px 1px 3.36px 0.14px rgba(0, 0, 0, 0.14)"}}/> */}
          </div>
        </section>

        <section className="about-section">
          <div className="about-image">
            <Tilt>
            <img src={image} alt="About Image"/>
            </Tilt>
          </div>
          <div className="about-content">
            <h2 style={{ color: "#5aefe7", paddingLeft:20  }}>About Us</h2>
            <p>
              The Computer Science forum at Amrita School of Engineering, Bengaluru which strives to bring the best out of every student comprising of CSI Amrita Bengaluru, ACM Amrita Bengaluru, ACM-W Amrita Bengaluru and Codechef Amrita Bengaluru. Together, these groups create a well-rounded and holistic environment for computer science students. The forum offers a range of activities and opportunities, including technical talks by experts, coding competitions, hackathons, and networking events. It also acts as a bridge between students and industry professionals, helping them gain exposure to real-world challenges and trends in the field. By bringing together these organizations, the Computer Science forum at Amrita School of Engineering in Bengaluru strives to provide its members with a comprehensive educational experience, empowering them to excel in their academic pursuits and prepare for successful careers in the world of technology.
            </p>
          </div>
        </section>
        {/* Add more sections with images and text as needed */}
      </main>
    </div>
  );
};

export default Home;
