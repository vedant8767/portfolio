import React, { useState } from 'react';
import '../css/About.css';
import self_image from '../assets/About_page.png';
import resume from '../../public/resume.pdf';
import Typewriter from 'typewriter-effect';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>Vedant Bhadkamkar</title>
        <meta name='description' content='Vedant Bhadkamkar Portfolio'/>
        <link ref="canonical" href='/'/>
      </Helmet>
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
            {/* Vedant Bhadkamkar */}
            <Typewriter
          options={{
            strings: [
              "Hello, I'm Vedant !",
              "I love coding.",
              "Welcome to my portfolio.",
            ],
            autoStart: true,
            loop: true,
            delay: 75, // Speed of typing
            deleteSpeed: 50, // Speed of deletion
          }}
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

