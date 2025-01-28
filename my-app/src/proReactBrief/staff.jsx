
import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const teamMembers = [
  {
    name: 'buthina',
    role: 'Principal',
    email: 'john.doe@school.com',
    phone: '+123456789',
    linkedin: 'https://linkedin.com/in/johndoe',
    location: 'New York, USA',
    image: 'buthina.png', 
  },
  {
    name: 'hamed',
    role: 'Vice Principal',
    email: 'jane.smith@school.com',
    phone: '+987654321',
    linkedin: 'https://linkedin.com/in/janesmith',
    location: 'London, UK',
    image: 'hamad.jpeg', 
  },
  {
    name: 'omar',
    role: 'Head of Academics',
    email: 'michael.johnson@school.com',
    phone: '+1122334455',
    linkedin: 'https://linkedin.com/in/michaeljohnson',
    location: 'Chicago, USA',
    image: 'omar.jpg', 
  },
  {
    name: 'tamara',
    role: 'Head of Administration',
    email: 'emily.brown@school.com',
    phone: '+9988776655',
    linkedin: 'https://linkedin.com/in/emilybrown',
    location: 'Sydney, Australia',
    image: 'tamara.jpg', 
  },
  {
    name: 'shireen',
    role: 'Head of Sports',
    email: 'david.wilson@school.com',
    phone: '+5544332211',
    linkedin: 'https://linkedin.com/in/davidwilson',
    location: 'Toronto, Canada',
    image: 'img4.jpeg', 
  },
  {
    name: 'Saba',
    role: 'Head of Arts',
    email: 'sarah.davis@school.com',
    phone: '+6677889900',
    linkedin: 'https://linkedin.com/in/sarahdavis',
    location: 'Paris, France',
    image: 'saba.jpg', 
  },
];

function TeamMembers() {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Key Staff Members</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' , borderRadius: '10px' }}>
        {teamMembers.map((member, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '300px' }}>
            <img 
              src={member.image} 
              alt={member.name} 
              style={{ width: '100%', borderRadius: '10px', marginBottom: '15px' }} 
            />
            <h3><FaUser /> {member.name}</h3>
            <p><strong>Role:</strong> {member.role}</p>
            <p><FaEnvelope /> {member.email}</p>
            <p><FaPhone /> {member.phone}</p>
            <p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            </p>
            <p><MdLocationOn /> {member.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;