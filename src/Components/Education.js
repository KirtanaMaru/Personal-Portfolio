import React from 'react';
import './Education.css';
import {motion} from 'framer-motion';
const Education = () => {
  return (
    <div className='e-section'>
        <h1 className='e-heading'>Academic</h1>
        <motion.div 
      initial={{ opacity: 0, scale:0,y:-200}} 
      whileInView={{opacity :1, scale:1,y:0}}
      transition={{duration:1}}>
        <div className='e-container'>
        
        <div className='e-card'>
            <span className='circle'></span>
            
            <motion.div 
      initial={{ opacity: 0, scale:0,y:200}} 
      whileInView={{opacity :1, scale:1,y:0}}
      transition={{duration:2}}>
            <span className='e-date'> Aug 2019 - July 2023</span>
            <div className='e-box'>
                <p>MGM's COLLEGE OF ENGINEERING NANDED</p>
                <p>B.Tech in Computer Science and Engineering</p>
                <p>Cgpa: 8.58 </p>
            </div>
        </motion.div>
        </div>
        
      
        <div className='e-card'>
            <span className='circle1'></span>
            <motion.div 
      initial={{ opacity: 0, scale:0,y:200}} 
      whileInView={{opacity :1, scale:1,y:0}}
      transition={{duration:2}}>
            <span className='e-date'>Jun 2018 - Apr 2019 </span>
            <div className='e-box'>
                <p>YESHWANT MAHAVIDHYALYA NANDED</p>
                <p>Higher Secondary (Maharashtra State Board) </p>
                <p>Percentage:  67.54% </p>
            </div>
            </motion.div>
        </div>
        
        
        <div className='e-card'>
            <span className='circle'></span>
            <motion.div
      initial={{ opacity: 0, scale:0,y:200}} 
      whileInView={{opacity :1, scale:1,y:0}}
      transition={{duration:2}}>
            <span className='e-date e-date3'> Jun 2016 - Mar 2017</span>
            <div className='e-box e-box3'>
                <p>NEHRU ENGLISH SCHOOL , NANDED </p>
                <p>Secondary School (Maharashtra State Board) </p>
                <p>Percentage:  69.80% </p>
            </div>
            </motion.div>
        </div>
        
        </div>
        </motion.div>
    </div>
  )
}

export default Education
