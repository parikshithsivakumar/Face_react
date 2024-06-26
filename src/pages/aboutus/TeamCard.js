import React from "react";
import "./Teamcard.css";

const TeamCard = ({
  name,
  role,
  skills,
  researchInterests,
  email,
  phonenumber,
  imageUrl,
  socials,
}) => {
  return (
    <div className="team-card">
      <div className="team-card-image-container"><img src={imageUrl} alt={name} className="team-card-image" />
      </div>
      <div className="team-card-content">
        <h3 className="team-card-name">{name}</h3>
        <p className="team-card-role">{role}</p>
        {researchInterests && (
          <p className="team-card-description">
            <b>Research Interests:</b> {researchInterests}
          </p>
        )}
        {skills && (
          <p className="team-card-description">
            <b>Skills:</b> {skills.join(", ")}
          </p>
        )}
        <p className="team-card-description">
          <b>Email: </b>
          {email}
        </p>
        {phonenumber && (
          <p className="team-card-description">
            <b>Phone Number: </b>
            {phonenumber}
          </p>
        )}
        <div className="team-card-social">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
