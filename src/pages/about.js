// pages/about.js
import React from 'react';
import TeamCard from './aboutus/TeamCard.js';

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://placekitten.com/300/300', // Replace with actual image URL
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://placekitten.com/301/301', // Replace with actual image URL
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://placekitten.com/301/301', // Replace with actual image URL
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://placekitten.com/301/301', // Replace with actual image URL
    },    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://placekitten.com/301/301', // Replace with actual image URL
    },
    // Add more team members as needed
  ];

  return (
    <div className='back'>
      <h1 style={{marginTop:0}}>Our Executive Team</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;
