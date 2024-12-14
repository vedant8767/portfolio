import React from 'react'
import { FaNewspaper, FaUtensils, FaFilePdf } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';

import '../css/Project.css'

function Projects() {
  return (
    <div className='Project_section' id='projects'>
        <h1>Projects</h1>
        <div className="all_projects">
            <div className="each_project" data-aos="fade-up">
                <FaUserTie title='Pdf' className='Project_icon'/>
                <h1><a href="https://mahadeoirkar.com/">Freelance Work</a></h1>
                <p>Created a dynamic and visually appealing portfolio website using React, Firebase, and CSS, deployed on
                Vercel. Integrated a Node.js backend for efficient mail service handling, providing a seamless and
                responsive user experience.</p>
            </div>
            <div className="each_project" data-aos="fade-up">
                <FaFilePdf title='Pdf' className='Project_icon'/>
                <h1>Image to Pdf Coverter</h1>
                <p>Developed a Flutter app to convert images to PDFs, enabling seamless image
                     uploads and direct PDF storage on mobile devices</p>
            </div>
            <div className="each_project" data-aos="fade-up">
                <FaNewspaper title='News' className='Project_icon'/>
                <h1><a href="https://reactnews-three.vercel.app/">News Web Application</a></h1>
                <p>Created a React-powered news platform with user authentication, customizable preferences, 
                    and real-time updates via Firebase Cloud Messaging.</p>
            </div>
            <div className="each_project" data-aos="fade-up">
                <FaUtensils title='Recipe' className='Project_icon'/>
                <h1><a href="https://recipe-app-two-peach.vercel.app/">Recipe Web Application</a></h1>
                <p>Built a responsive recipe app in React, offering detailed search functionality 
                    and intuitive UI for a smooth user experience.</p>
            </div>
        </div>
    </div>
  )
}

export default Projects