import React from "react";
import "./index.css";
import image from "../static/imgs/hero-img.jpg";
import { TypeAnimation } from "react-type-animation";
import bg_video from "../static/imgs/bg_video.mp4";
import SimpleCarousel from "../components/carousel/carousel";
import { BtnLink } from "./aboutus/learnmore.js";

const Home = () => {
  return (
    <div>
      <header>{/* Your header content */}</header>
      <main className="main-page-container">
        <section className="hero-section">
          <video autoPlay loop muted playsInline className="background-video">
            <source src={bg_video} type="video/mp4" />
          </video>
          <div className="hero-content">
            <h1>
              Welcome to the{" "}
              <TypeAnimation
                sequence={["FACE Club!", 1000]}
                wrapper="span"
                speed={400}
                style={{
                  fontSize: "1.5em",
                  display: "inline-block",
                  color: "#5aefe7",
                }}
                repeat={Infinity}
              />
            </h1>
            <p>"Where ideas flow, Innovation grow!!"</p>
            <a
              href="https://chat.whatsapp.com/CBePP2Q2moR4PuQUQqyxVB"
              className="join-button"
            >
              Join Us on Whatsapp
            </a>
          </div>
        </section>

        <section className="about-section">
          <div className="about-image">
            <img src={image} alt="About Image" />
          </div>
          <div className="about-content">
            <h2 style={{ color: "#5aefe7", paddingLeft: 20 }}>About Us</h2>
            <p>
              The Computer Science forum at Amrita School of Engineering,
              Bengaluru which strives to bring the best out of every student
              comprising of CSI Amrita Bengaluru, ACM Amrita Bengaluru, ACM-W
              Amrita Bengaluru and Codechef Amrita Bengaluru. Together, these
              groups create a well-rounded and holistic environment for computer
              science students. The forum offers a range of activities and
              opportunities, including technical talks by experts, coding
              competitions, hackathons, and networking events. It also acts as a
              bridge between students and industry professionals, helping them
              gain exposure to real-world challenges and trends in the field. By
              bringing together these organizations, the Computer Science forum
              at Amrita School of Engineering in Bengaluru strives to provide
              its members with a comprehensive educational experience,
              empowering them to excel in their academic pursuits and prepare
              for successful careers in the world of technology.

              <BtnLink to="/about">Learn more</BtnLink>
            </p>
           
          </div>
        </section>
        <SimpleCarousel />
      </main>
    </div>
  );
};

export default Home;
