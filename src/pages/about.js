// pages/about.js
import React from 'react';
import TeamCard from './aboutus/TeamCard.js';
import Aboutclub from './aboutus/aboutclub.js';
import Contactus from './aboutus/contactus.js';



const AboutUsPage = () => {
  const teamMembers = [
    {
      name: 'Anirudh',
      role: 'President',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://placekitten.com/300/300', // Replace with actual image URL
    },
    {
      name: 'Rohan Gamidi',
      role: 'Vice President',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://placekitten.com/301/301', // Replace with actual image URL
    },
    {
      name: 'Suryamithra',
      role: 'Vice President',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://placekitten.com/301/301', // Replace with actual image URL
    },    
    {
      name: 'Anisha Reddy',
      role: 'Tresaurer',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://placekitten.com/301/301', // Replace with actual image URL
    },
    {
      name: 'Nidhin Prabhakaran',
      role: 'Mentor',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://placekitten.com/301/301', // Replace with actual image URL
    },
    // Add more team members as needed
  ];

  return (
    <div className='back'>
      <Aboutclub/>
      <h1 style={{marginTop:0}}>Meet Our Executive Team</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
      <Contactus/>
    </div>
  );
};

export default AboutUsPage;
