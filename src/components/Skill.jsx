import React from 'react'
import { FaPython, FaJsSquare, FaReact, FaJava, FaGithub } from 'react-icons/fa'; // Python, JavaScript, React, Java, GitHub
import { SiFlutter, SiMongodb, SiFirebase, SiCplusplus, SiMysql } from 'react-icons/si'; // Flutter, MongoDB, Firebase, C++, MySQL
import '../css/Skill.css'

function Skill() {
  return (
    <div className='skills_section' id='skills'>
        <h1>Skills</h1>
        <div className="all_skill">
            <div className='each_icon' data-aos="fade-up">
                <FaJsSquare className="icon" title="JavaScript"/>
                <h2>JavaScript</h2>
            </div>
            <div className='each_icon' data-aos="fade-up">
                <FaReact className="icon" title="React" />
                <h2>React</h2>
            </div>
            <div className='each_icon' data-aos="fade-up">
                <FaPython className="icon" title="Python" />
                <h2>Python</h2>
            </div>
            <div className='each_icon' data-aos="fade-up">
                <FaJava className="icon" title='Java'/>
                <h2>Java</h2>
            </div>
            <div className='each_icon'data-aos="fade-up">
                <SiCplusplus className="icon" title='C++'/>
                <h2>C++</h2>
            </div>
            <div className='each_icon' data-aos="fade-up">
                <SiFlutter className="icon" title='Flutter'/>
                <h2>Flutter</h2>
            </div>
            <div className='each_icon' data-aos="fade-up">
                <SiMongodb className="icon" title='Mongodb'/>
                <h2>Mongodb</h2>
            </div>
            <div className='each_icon' data-aos="fade-up">
                <SiFirebase className="icon" title='Firebase'/>
                <h2>Firebase</h2>
            </div>
            <div className='each_icon' data-aos="fade-up">
                <SiMysql className="icon" title='MySql'/>
                <h2>MySql</h2>
            </div>
            <div className='each_icon' data-aos="fade-up">
                <FaGithub className="icon" title='Github'/>
                <h2>Github</h2>
            </div>
        </div>
    </div>
  )
}

export default Skill