// pages/index.js

import React from "react";
import './index.css';

const Home = () => {
  return (
    <div className="main-page-container">
      <header>
        {/* Your header content */}
      </header>
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to the Forum of Aspiring Computer Science Engineers Club!</h1>
            <p>Join us for exciting discussions, events, and collaborative learning.</p>
            <button className="join-button">Join Now</button>
          </div>
          <div className="hero-image">
            {/* Add a beautiful hero image */}
            <img src="path/to/your/hero-image.jpg" alt="Hero Image" />
          </div>
        </section>

        <section className="about-section">
          <h2>About Us</h2>
          <p>
            We are a community of passionate computer science enthusiasts, fostering knowledge
            sharing, skill development, and innovation. Join us on our journey of exploration and growth.
          </p>
        </section>

        {/* Add more sections with images and text as needed */}
      </main>
    </div>
  );
};

export default Home;
