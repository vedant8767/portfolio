import { useEffect } from 'react'
import './App.css'

import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Skill from './components/Skill'
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutPage from './components/AboutPage'



function App() {
  useEffect(()=>{
    AOS.init({
        // Add options here, if needed
        duration: 1500, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once or every time you scroll
      });
},[])
  return (
   <div>
     <AboutPage/>
     <Skill/>
     <Projects/>
     <Contact/>
     <Footer/>
   </div>
  )
}

export default App
