import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import '../css/Contact.css'

function Contact() {
  return (
    <div className='contact_section'>
        <h1>Contact Me</h1>
        <div className="contact_list">
            <div className='contact_icon'>
                <a href="https://github.com/vedant8767/">
                <FaGithub title='Git' className='c_icon'/>
                </a>
            </div>
            <div className='contact_icon'>
                <a href="https://www.linkedin.com/in/vedant-bhadkamkar-7097322b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedin title='linkedin' className='c_icon'/>
                </a>
            </div>
            <div className='contact_icon'>
                <a href="https://www.instagram.com/v_e_d_45/">
                    <FaInstagram title='Instagram' className='c_icon'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact