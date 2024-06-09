import React from 'react';
import './Teamcard.css';

const TeamCard = ({ name, role, description, researchInterests, email, imageUrl, socials }) => {
  return (
    <div className="team-card">
      <img src={imageUrl} alt={name} className="team-card-image" />
      <div className="team-card-content">
        <h3 className="team-card-name">{name}</h3>
        <p className="team-card-role">{role}</p>
        <p className="team-card-description"><b>Research Interests:</b> {researchInterests}</p>
        <p className="team-card-description"><b>Email: </b>{email}</p>
        <div className="team-card-social">
          {socials.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
