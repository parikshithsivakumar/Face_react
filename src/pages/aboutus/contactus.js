// ContactUs.js

import React from 'react';
import './Contactus.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-header">Contact Us</h2>
      <div className="contact-info">
        <p>
          If you have any questions, suggestions, or if you want to get involved with FACE Club, feel free to reach out to us. We are always open to new ideas and collaborations.
        </p>
        <p>Email: faceclub@example.com</p>
      </div>
      <form className="contact-form">
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" />
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      <div className="social-icons">
        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
      </div>
    </div>
  );
}

export default ContactUs;
