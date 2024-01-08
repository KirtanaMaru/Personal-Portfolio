import React from 'react'
import girl1 from '../img/kirtana.jpeg';
import { Typewriter } from 'react-simple-typewriter';
import './About.css';
import { saveAs } from 'file-saver';

import {motion} from 'framer-motion';

const About = () => {
  const handleDownload = () => {
    const filePath = process.env.PUBLIC_URL + '/Kirtana_Resume.pdf'; // Assuming resume.pdf is in the public directory
    saveAs(filePath, 'Kirtana_Resume.pdf');
    window.alert('Thank You for Downloading CV!!')
  };
 
  return (
    
    <div className='about-section'>
        <h1 className='about-head'>About me</h1>
        <motion.div 
        initial={{ opacity: 0, scale:0}} 
        whileInView={{opacity :1,scale:1}}
        transition={{duration:0.6}}
        ><div className='img-bg'>
        <div className='about-img-container'>
          <img src={girl1} alt='girl' className='about-img'></img>
        </div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        </motion.div>
        <div className='about-content'>
        <motion.div 
        initial={{ opacity: 0, scale:0,x:-100}} 
        whileInView={{opacity :1,scale:1,x:0}}
        transition={{duration:1.5}}>
        <span className='about-text'>
          <span>I'm a </span>
          <Typewriter
            words={['Web Developer','Frontend Developer','Backend Developer','Python Programmer']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            style={{color:''}}
          />
        </span>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, scale:0}} 
        whileInView={{opacity :1,scale:1}}
        transition={{duration:0.9}}>
        <p>Hello, I'm Kirtana Maru, a dedicated web and software developer recently graduated 
                from MGM's College of Engineering. My proficiency spans both web and software development, 
                covering a range of front-end and back-end technologies. I am actively seeking exciting job opportunities
                 where I can apply my skills and hard work to make meaningful contributions to a company's success. 
                 Eager to evolve as a developer, I am confident in my abilities 
                and enthusiastic about continuous learning and embracing new challenges in 
                the dynamic field of development.</p>
        
        <br></br>
   
        <span className='Dcv' onClick={handleDownload}>Download CV</span> 
        </motion.div>
        </div>
    </div>
    
  )
}

export default About
