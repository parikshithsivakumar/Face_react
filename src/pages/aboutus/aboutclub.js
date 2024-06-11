import React from "react";
import "./clubDetails.css"; // Create a CSS file for styling
import motiveIMG from "./face-poster.jpg";

const ClubDetails = () => {
  return (
    <div className="about-page">
      <div className="about-section">
        <div className="about-content">
          <h2 className="section-title">About FACE Club</h2>
          <p className="section-text">
            Welcome to FACE (Forum of Aspiring Computer Science Engineering)
            Club! We are a vibrant community of computer science enthusiasts
            dedicated to fostering learning, collaboration, and innovation.
          </p>
          <p className="section-text">
            Our mission is to provide a platform for students to explore and
            expand their knowledge in the field of computer science and
            engineering. We organize various events, workshops, and discussions
            to facilitate the exchange of ideas and skills among our members.
          </p>
          <p className="section-text">
            Join us on this exciting journey as we strive to create a space
            where aspiring computer science engineers can connect, learn, and
            grow together.
          </p>
        </div>
      </div>
      <div className="motive-section">
        <div className="motive-image">
          <img src={motiveIMG} alt="Motive Image" />
        </div>
        <div className="motive-text">
          <h2 className="section-title">Our Motive</h2>
          <p className="section-text">
            At FACE, we believe that the possibilities in the world of computer
            engineering are endless, and it's our shared passion for technology
            that drives us forward. We encourage every member to dream big and
            reach for the stars, all while knowing that you have a supportive
            community by your side, ready to help you turn those dreams into
            reality. We are committed to staying at the forefront of
            technological advancements, and together, we will explore emerging
            trends, share knowledge, and harness our collective potential.
            Whether you're a seasoned professional or just starting your journey
            in computer engineering, FACE is the place where you can find
            inspiration, mentorship, and collaboration. Our commitment to
            inclusivity ensures that all voices are heard, and every perspective
            is valued. Join us at FACE and be a part of the exciting journey of
            shaping a brighter, code-powered future. Together, we'll create,
            learn, and innovate with the happiness of collaboration at the core
            of our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClubDetails;
