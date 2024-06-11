// pages/about.js
import React from "react";
import TeamCard from "./aboutus/TeamCard.js";
import Aboutclub from "./aboutus/aboutclub.js";
import Contactus from "./aboutus/contactus.js";
import img1 from "../static/imgs/hero-img.jpg";

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Anirudh",
      role: "President",
      researchInterests: [
        "Image Processing",
        "Machine Learning",
        "Deep Learning",
        "Remote Sensing",
        "Computer Vision",
        "Virtual Reality",
        "Artificial Reality",
      ],
      email: "tv_nidhin@blr.amrita.edu",
      imageUrl: "https://placekitten.com/300/300", // Replace with actual image URL
      socials: [
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-linkedin", link: "#" },
        // Add more social icons as needed
      ],
    },
    {
      name: "Rohan Gamidi",
      role: "Vice President",
      researchInterests: [
        "Image Processing",
        "Machine Learning",
        "Deep Learning",
        "Remote Sensing",
        "Computer Vision",
        "Virtual Reality",
        "Artificial Reality",
      ],
      email: "tv_nidhin@blr.amrita.edu",
      imageUrl: img1, // Replace with actual image URL
      socials: [
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-linkedin", link: "#" },
        // Add more social icons as needed
      ],
    },
    {
      name: "Suryamithra",
      role: "Vice President",
      researchInterests: [
        "Image Processing",
        "Machine Learning",
        "Deep Learning",
        "Remote Sensing",
        "Computer Vision",
        "Virtual Reality",
        "Artificial Reality",
      ],
      email: "tv_nidhin@blr.amrita.edu",
      imageUrl: "#", // Replace with actual image URL
      socials: [
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-linkedin", link: "#" },
        // Add more social icons as needed
      ],
    },
    {
      name: "Anisha Reddy",
      role: "Treasurer",
      researchInterests: [
        "Image Processing",
        "Machine Learning",
        "Deep Learning",
        "Remote Sensing",
        "Computer Vision",
        "Virtual Reality",
        "Artificial Reality",
      ],
      email: "tv_nidhin@blr.amrita.edu",
      imageUrl: "https://placekitten.com/301/301", // Replace with actual image URL
      socials: [
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-linkedin", link: "#" },
        // Add more social icons as needed
      ],
    },
    {
      name: "Dr. Nidhin Prabhakar T.V.",
      role: "Mentor",
      researchInterests: [
        "Image Processing",
        "Machine Learning",
        "Deep Learning",
        "Remote Sensing",
        "Computer Vision",
        "Virtual Reality",
        "Artificial Reality",
      ],
      email: "tv_nidhin@blr.amrita.edu",
      imageUrl: "https://placekitten.com/301/301", // Replace with actual image URL
      socials: [
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-linkedin", link: "#" },
        // Add more social icons as needed
      ],
    },
    // Add more team members as needed
  ];

  return (
    <div className="back">
      <Aboutclub />
      <h1 style={{ fontSize: "2rem", margin: "4rem", color: "#5aefe7" }}>
        Meet Our Executive Team
      </h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
      <Contactus />
    </div>
  );
};

export default AboutUsPage;
