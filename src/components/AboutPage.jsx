// import React from 'react'
// import Typical from 'react-typical';
// import '../css/About.css'
// import self_image from '../assets/About_page.png'
// import resume from '../../public/resume.pdf'

// function About() {
  
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     const close = document.getElementById("close");
//     close.style.display = "block";
//     document.getElementsByClassName("navbar")[0].style.height = "100vh";
//     setIsOpen(!isOpen);
// };

// const toggleMenu2 = () => {
//     setIsOpen(false);
//     const close = document.getElementById("close");
//     document.getElementsByClassName("navbar")[0].style.height = "";
//     close.style.display = "none";
// };
  
//   return (
//     <div className='main_page' id='#home'>
//         <nav>
//           <div className='navbar'>
//             <h1>Vedant_Bhadkamkar</h1>
//             <ul>
//               <li><a href="#home">Home</a></li>
//               <li><a href="#skills">Skill</a></li>
//               <li><a href="#projects">Projects</a></li>
//               <li><button> <a href={resume}>Download Resume</a></button></li>
//               <li><div className="hamburger" onClick={toggleMenu}>
//                 <span className="bar"></span>
//                 <span className="bar"></span>
//                 <span className="bar"></span>
//             </div></li>
//             <li><div id="close" className="closebutton" onClick={toggleMenu2}>
//                 <p>X</p>
//             </div></li>
//             </ul>
//           </div>
//         </nav>
//         <div className="main_about">
//           <div className="left_side">
//             <h1>
//             <Typical
//               steps={[
//                 'Vedant Bhadkamkar', 1000,    
//                 ' ', 100,          
//                 'Software Developer', 2000, 
//                 ' ', 3000,        
//               ]}
//               loop={Infinity}
//               wrapper="span"
//             />
//             </h1>
//             <p>
//             Hi there! I'm a Software Developer with a knack for crafting elegant and efficient 
//             digital experiences. Whether it's designing seamless websites or building powerful 
//             applications, I turn ideas into reality with code.
//             </p>
//           </div>
//           <div className="right_side">
//             <img src={self_image} alt="" srcset="" />
//           </div>
//         </div>
//     </div>
//   )
// }

// export default About
import React, { useState } from 'react'; // Import useState
import Typical from 'react-typical';
import '../css/About.css';
import self_image from '../assets/About_page.png';
import resume from '../../public/resume.pdf';

function AboutPage() {
  // State for handling mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when any menu item is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='main_page' id='home'>
      <nav>
        <div className={`navbar ${isOpen ? 'open' : ''}`}>
          <h1>Vedant_Bhadkamkar</h1>
          <ul className={isOpen ? 'active' : ''}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><button><a href={resume} download onClick={closeMenu}>Download Resume</a></button></li>
          </ul>

          {/* Hamburger icon */}
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* Close button (X) */}
          {isOpen && (
            <div className="closebutton" onClick={toggleMenu}>
              <p>X</p>
            </div>
          )}
        </div>
      </nav>
      
      <div className="main_about">
        <div className="left_side" >
          <h1>
            
            <Typical
              steps={[
                'Vedant Bhadkamkar', 1000,    
                ' ', 100,          
                'Software Developer', 2000, 
                ' ', 3000,        
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </h1>
          <p>
            Hi there! I'm a Software Developer with a knack for crafting elegant and efficient 
            digital experiences. Whether it's designing seamless websites or building powerful 
            applications, I turn ideas into reality with code.
          </p>
        </div>
        
        <div className="right_side" >
          <img src={self_image} alt="Vedant Bhadkamkar" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

