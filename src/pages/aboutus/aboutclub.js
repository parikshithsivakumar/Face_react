import React from 'react';
import './clubDetails.css'; // Create a CSS file for styling

const ClubDetails = () => {
  return (
    <div className="about-page">
      <div className="about-section">
        <div className="about-content">
          <h2 className="section-title">About FACE Club</h2>
          <p className="section-text">
            Welcome to FACE (Forum of Aspiring Computer Science Engineering) Club! We are a vibrant community of computer science enthusiasts dedicated to fostering learning, collaboration, and innovation.
          </p>
          <p className="section-text">
            Our mission is to provide a platform for students to explore and expand their knowledge in the field of computer science and engineering. We organize various events, workshops, and discussions to facilitate the exchange of ideas and skills among our members.
          </p>
          <p className="section-text">
            Join us on this exciting journey as we strive to create a space where aspiring computer science engineers can connect, learn, and grow together.
          </p>
        </div>
      </div>
      <div className="motive-section">
        <div className="motive-image">
          <img src="https://via.placeholder.com/150" alt="Motive Image" />
        </div>
        <div className="motive-text">
          <h2 className="section-title">Our Motive</h2>
          <p className="section-text">
            Our motive is to cultivate a community where members can share knowledge, collaborate on projects, and develop skills that will benefit them in their academic and professional careers. We aim to inspire and empower students to become innovative thinkers and problem solvers in the field of computer science and engineering.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClubDetails;
