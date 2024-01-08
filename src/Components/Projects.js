import React from 'react';
import VanillaTilt from 'vanilla-tilt';
import project1 from '../img/project1.png'
import project2 from '../img/project2.png'
import project3 from '../img/airbnb_clone.png';
import project4 from '../img/Screenshot (4).png';
import project5 from '../img/Screenshot (6).png';
import './Projects.css';
import { useEffect } from 'react';
import {motion} from 'framer-motion';

const Projects = () => {
 
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.project-card',{
      max:5,
      speed:10,
      glare:true
    }))
  })
  return (
    <div className='project-section'>
      <div className='col-xs-12 pro_heading'>My Projects</div>
      <motion.div 
      initial={{ opacity: 0, scale:0,y:-200}} 
      whileInView={{opacity :1, scale:1,y:0}}
      transition={{duration:0.8}}>
      <div className='project-container'>
          <div className='project-card' >
          <img className='project-image' src={project1} alt='project1'/>
          <div className='project-caption'>Recruitment Hub</div>
          <div className='project-info' >
            <p>Recruitment Hub is a dynamic web portal designed for students and the Training and Placement Officer (TPO) </p>
            <a href="https://github.com/KirtanaMaru/Recruitment_Hub" style={{textDecoration:'none'}}><button className='project-more'>More</button></a>
          </div>
        </div>
        
        <div className='project-card' >
          <img className='project-image' src={project2} alt='project1'/>
          <span className='project-caption'>E-Sport Portal</span>
          <div className='project-info' >
            <p>E-sport Portal is a dynamic web application tailored for sports enthusiasts and event managers.</p>
            <a href="https://github.com/KirtanaMaru/E-sports-portal" style={{textDecoration:'none'}}><button className='project-more'>More</button></a>
          </div>
        </div>
        <div className='project-card' >
          <img className='project-image' src={project3} alt='project3'/>
          <span className='project-caption'>Airbnb Clone</span>
          <div className='project-info' >
            <p>This Airbnb clone is designed using React.js and serves as a frontend clone of Airbnb. </p>
            <a href="https://github.com/KirtanaMaru/Airbnb_Clone" style={{textDecoration:'none'}}><button className='project-more'>More</button></a>
          </div>
        </div>
        <div className='project-card' >
          <img className='project-image' src={project4} alt='project4'/>
          <span className='project-caption'>Text Analysis</span>
          <div className='project-info' >
            <p>Implemented a Python script for web scraping and text analysis to extract and analyze articles, 
              producing key metrics for a natural language processing project. </p>
              <a href="https://github.com/KirtanaMaru/Text-Extract-And-Analysis-" style={{textDecoration:'none'}}><button className='project-more'>More</button></a>
          </div>
        </div>
        <div className='project-card' >
          <img className='project-image' src={project5} alt='project5'/>
          <span className='project-caption'>Personal Portfolio</span>
          <div className='project-info' >
            <p>Developed responsive and interactive personal portfolio using React.js to showcase my skills and projects with a user-friendly interface.</p>
            <a href="https://github.com/KirtanaMaru" style={{textDecoration:'none'}}><button className='project-more'>More</button></a>
          </div>
        </div>
        
      </div>
      </motion.div>
    </div>
  )
}

export default Projects
