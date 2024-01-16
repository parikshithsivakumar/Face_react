import React from 'react';
import './Teamcard.css';

const TeamCard = ({ name, role, description, imageUrl }) => {
  return (
    <div className="team-card">
      <img src={imageUrl} alt={name} className="team-card-image" />
      <h3 className="team-card-name">{name}</h3>
      <div className="team-card-content">
        <p className="team-card-role">{role}</p>
        <p className="team-card-description">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
