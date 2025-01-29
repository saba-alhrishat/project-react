
import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const teamMembers = [
  {
    name: 'buthina',
    role: 'Principal',
    email: 'buthina.bu@school.com',
    phone: '+123456789',
    linkedin: 'https://linkedin.com/in/buthina',
    location: 'JORDAN, AQABA',
    image: 'buthina.png', 
  },
  {
    name: 'hamed',
    role: 'Vice Principal',
    email: 'hamed.hamed@school.com',
    phone: '+987654321',
    linkedin: 'https://linkedin.com/in/hamed',
    location: 'JORDAN, AQABA',
    image: 'hamad.jpeg', 
  }, 
  {
    name: 'omar',
    role: 'Head of Academics',
    email: 'omar.omar@school.com',
    phone: '+1122334455',
    linkedin: 'https://linkedin.com/in/omar',
    location: 'JORDAN, AQABA',
    image: 'omar.jpg', 
  },
  {
    name: 'tamara',
    role: 'Head of Administration',
    email: 'tamara.tamara@school.com',
    phone: '+9988776655',
    linkedin: 'https://linkedin.com/in/tamara',
    location: 'JORDAN, AQABA',
    image: 'tamara.jpg', 
  },
  {
    name: 'shireen',
    role: 'Head of Sports',
    email: 'shireen@school.com',
    phone: '+5544332211',
    linkedin: 'https://linkedin.com/in/shireen',
    location: 'JORDAN, AQABA',
    image: 'img4.jpeg', 
  },
  {
    name: 'Saba',
    role: 'Head of Arts',
    email: 'Saba@school.com',
    phone: '+6677889900',
    linkedin: 'https://linkedin.com/in/Saba',
    location: 'JORDAN, AQABA',
    image: 'saba.jpg', 
  },
];

function TeamMembers() {
  return (


      <div>  
      <div style={{display:"flex", marginTop:'10px'}}>
      <div style={{position:'relative',bottom:"29px"}}> 
           <h1 className='header-text'
        style={{color: '#f8991f',width:"210px", fontSize: '2rem',}}>
      Staff Team
      </h1></div>
      <div className='headers'></div>

      <div className='header1'></div>
      </div>

      <div style={{ 
        height : '30vh',
  display: 'grid', 
  gridTemplateColumns: 'repeat(3, auto)', 
  gap: '10px', 
  borderRadius: '10px',
  justifyContent: 'center'}}>
    
    {teamMembers.map((member, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10%', width: '300px' }}>
            <img 
              src={member.image} 
              alt={member.name} 
              style={{ width: '100%', borderRadius: '50%', marginBottom: '15px'}} />
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







// import React, { useState } from 'react';
// import { FaUser, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
// import { MdLocationOn } from 'react-icons/md';
// import './staff.css'; // استيراد ملف CSS

// const teamMembers = [
//   {
//     name: 'buthina',
//     role: 'Principal',
//     email: 'buthina.bu@school.com',
//     phone: '+123456789',
//     linkedin: 'https://linkedin.com/in/buthina',
//     location: 'JORDAN, AQABA',
//     image: 'buthina.png',
//   },
//   {
//     name: 'hamed',
//     role: 'Vice Principal',
//     email: 'hamed.hamed@school.com',
//     phone: '+987654321',
//     linkedin: 'https://linkedin.com/in/hamed',
//     location: 'JORDAN, AQABA',
//     image: 'hamad.jpeg',
//   },
//   {
//     name: 'omar',
//     role: 'Head of Academics',
//     email: 'omar.omar@school.com',
//     phone: '+1122334455',
//     linkedin: 'https://linkedin.com/in/omar',
//     location: 'JORDAN, AQABA',
//     image: 'omar.jpg',
//   },
//   {
//     name: 'tamara',
//     role: 'Head of Administration',
//     email: 'tamara.tamara@school.com',
//     phone: '+9988776655',
//     linkedin: 'https://linkedin.com/in/tamara',
//     location: 'JORDAN, AQABA',
//     image: 'tamara.jpg',
//   },
//   {
//     name: 'shireen',
//     role: 'Head of Sports',
//     email: 'shireen@school.com',
//     phone: '+5544332211',
//     linkedin: 'https://linkedin.com/in/shireen',
//     location: 'JORDAN, AQABA',
//     image: 'img4.jpeg',
//   },
//   {
//     name: 'Saba',
//     role: 'Head of Arts',
//     email: 'Saba@school.com',
//     phone: '+6677889900',
//     linkedin: 'https://linkedin.com/in/Saba',
//     location: 'JORDAN, AQABA',
//     image: 'saba.jpg',
//   },
// ];

// function TeamMembers() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = (index) => {
//     setSelectedImage(selectedImage === index ? null : index);
//   };

//   return (
//     <div>
//       <div style={{  width: 'fitContent', display: 'flex', marginTop: '10px' }}>
//         <div style={{ position: 'relative', bottom: '29px' }}>
//           <h1 className='header-text' style={{ color: '#f8991f', width: '100px', fontSize: '2rem' }}>
//             Our staff team
//           </h1>
//         </div>
//         <div className='headers'></div>
//         <div className='header1'></div>
//       </div>

//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', borderRadius: '10px' }}>
//         {teamMembers.map((member, index) => (
//           <div
//             key={index}
//             style={{
//               border: '1px solid #ccc',
//               padding: '10px',
//               borderRadius: '10%',
//               // width: '100vh', // تغيير العرض ليكون fit-content

//               flex: '1 1 calc(33.333% - 40px)', // عرض كل 3 عناصر في صف واحد
//               boxSizing: 'border-box',
//               // margin: '5px', // تقليل الهوامش


//             }}
//           >
//             <img
//               src={member.image}
//               alt={member.name}
//               style={{
//                 width: '70%',
//                 borderRadius: '50%',
//                 // marginBottom: '10px', 
//                 cursor: 'pointer',
//                 transform: selectedImage === index ? 'scale(1.1)' : 'scale(1)',
//                 transition: 'transform 0.3s ease',
//               }}
//               onClick={() => handleImageClick(index)}
//             />
//             <h3><FaUser /> {member.name}</h3>
//             <p><strong>Role:</strong> {member.role}</p>
//             <p><FaEnvelope /> {member.email}</p>
//             <p><FaPhone /> {member.phone}</p>
//             <p>
//               <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin /> LinkedIn
//               </a>
//             </p>
//             <p><MdLocationOn /> {member.location}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TeamMembers;




// import React, { useState } from 'react';
// import { FaUser, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
// import { MdLocationOn } from 'react-icons/md';
// import './staff.css'; // استيراد ملف CSS

// const teamMembers = [
//   // ... (نفس بيانات teamMembers السابقة)
// ];

// function TeamMembers() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = (index) => {
//     setSelectedImage(selectedImage === index ? null : index);
//   };

//   return (
//     <div>
//       <div style={{ display: 'flex', marginTop: '10px' }}>
//         <div style={{ position: 'relative', bottom: '15px' }}>
//           <h1 className='header-text' style={{ color: '#f8991f', width: '150px', fontSize: '1.5rem' }}>
//             Our staff team
//           </h1>
//         </div>
//         <div className='headers'></div>
//         <div className='header1'></div>
//       </div>

//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', borderRadius: '10px' }}>
//         {teamMembers.map((member, index) => (
//           <div
//             key={index}
//             style={{
//               border: '1px solid #ccc',
//               padding: '10px',
//               borderRadius: '10%',
//               width: '200px', // تصغير عرض القسم
//               flex: '1 1 calc(33.333% - 20px)', // عرض كل 3 عناصر في صف واحد
//               boxSizing: 'border-box',
//               textAlign: 'center',
//             }}
//           >
//             <img
//               src={member.image}
//               alt={member.name}
//               style={{
//                 width: '80px', // تصغير حجم الصورة
//                 height: '80px', // تصغير حجم الصورة
//                 borderRadius: '50%',
//                 marginBottom: '10px',
//                 cursor: 'pointer',
//                 transform: selectedImage === index ? 'scale(1.1)' : 'scale(1)',
//                 transition: 'transform 0.3s ease',
//               }}
//               onClick={() => handleImageClick(index)}
//             />
//             <h3 style={{ fontSize: '1rem', margin: '5px 0' }}><FaUser /> {member.name}</h3>
//             <p style={{ fontSize: '0.9rem', margin: '5px 0' }}><strong>Role:</strong> {member.role}</p>
//             <p style={{ fontSize: '0.9rem', margin: '5px 0' }}><FaEnvelope /> {member.email}</p>
//             <p style={{ fontSize: '0.9rem', margin: '5px 0' }}><FaPhone /> {member.phone}</p>
//             <p style={{ fontSize: '0.9rem', margin: '5px 0' }}>
//               <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin /> LinkedIn
//               </a>
//             </p>
//             <p style={{ fontSize: '0.9rem', margin: '5px 0' }}><MdLocationOn /> {member.location}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TeamMembers;