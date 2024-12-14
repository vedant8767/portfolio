import { useEffect } from 'react'
import './App.css'
import About from './components/about'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/projects'
import Skill from './components/skill'
import AOS from 'aos';
import 'aos/dist/aos.css';


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
     <About/>
     <Skill/>
     <Projects/>
     <Contact/>
     <Footer/>
   </div>
  )
}

export default App