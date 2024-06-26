// pages/about.js
import React from "react";
import TeamCard from "./aboutus/TeamCard.js";
import Aboutclub from "./aboutus/aboutclub.js";
import Contactus from "./aboutus/contactus.js";
import president_Image from "../static/imgs/president_of_FACE.png";
import mentor_Image from "../static/imgs/mentor.png";
import Rohan_Image from "../static/imgs/Vice_presi_of_FACE.jpg";
import Anisha_Image from "../static/imgs/Treasurer.png";
import Suryamithra_Image from "../static/imgs/vice_president_of_FACE.jpg";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Anirudh",
      role: "President",
      skills: [
        "Data Science",
        "Machine Learning",
        "Deep Learning",
        "Computer vision",
        "Natural Language Processing",
        "Computational Intelligence",
      ],
      phonenumber: "+91 6364151707",
      email: "anirudh8124@gmail.com",
      imageUrl: president_Image, // Replace with actual image URL
      socials: [
        {
          icon: FaInstagram,
          link: "https://www.instagram.com/anirudh__8_/",
        },
        {
          icon: FaTwitter,
          link: "https://www.linkedin.com/in/anirudh-s-46115124a/",
        },
        // Add more social icons as needed
      ],
    },
    {
      name: "Rohan Gamidi",
      role: "Vice President",
      skills: [
        "Data Science",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Internet of Things",
      ],
      email: "rohangamidi1999@gmail.com",
      phonenumber: "+91 7022496433",
      imageUrl: Rohan_Image, // Replace with actual image URL
      socials: [
        {
          icon: "fab fa-instagram",
          link: "https://www.instagram.com/mysterious_jelly/",
        },
        {
          icon: "fab fa-linkedin",
          link: "http://www.linkedin.com/in/rohan-gamidi-1060a6248",
        },
        { icon: "fab fa-github", link: "https://github.com/gamidirohan" },
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
      imageUrl: mentor_Image, // Replace with actual image URL
      socials: [
        { icon: "fab fa-twitter", link: "#" },
        { icon: "fab fa-linkedin", link: "#" },
        // Add more social icons as needed
      ],
    },
    {
      name: "Suryamithra",
      role: "Vice President",
      skills: [
        "Machine Learning",
        "SQL,Mongodb",
        "Natural Language Processing",
        "Django,WebDev",
      ],

      email: "suryamritha.manoj@gmail.com",
      phonenumber: "+91 9445560262",
      imageUrl: Suryamithra_Image, // Replace with actual image URL
      socials: [
        {
          icon: "fab fa-instagram",
          link: "https://www.instagram.com/suryamritha_.531/",
        },
        {
          icon: "fab fa-linkedin",
          link: "http://www.linkedin.com/in/suryamritham",
        },
        { icon: "fab fa-github", link: "https://github.com/suryamritha" },
        // Add more social icons as needed
      ],
    },
    {
      name: "Anisha Reddy",
      role: "Treasurer",
      skills: ["Data Science", "Machine Learning", "Full Stack Development"],
      email: "anishareddy0409@gmail.com",
      phonenumber: "+91 9535459046",
      imageUrl: Anisha_Image, // Replace with actual image URL
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
