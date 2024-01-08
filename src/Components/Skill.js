import React from 'react';
import {motion} from 'framer-motion';
import './Skill.css';
import python from '../img/python.png';
import c from '../img/c.png';
import java from '../img/java.png';
import html from '../img/html.png';
import css from '../img/css.png';
import javascript from '../img/javascript.png';
import bootstrap from '../img/bootstrap.png';
import mysql from '../img/mysql.png';
import reactjs from '../img/react.png';
import git from '../img/git.png';
import github from '../img/github.png';
import netlify from '../img/netlify.png';
import visualstudio from '../img/visualstudio.png';
import springboot from '../img/springboot.png';
import teamwork from '../img/teamwork.png';
import problemsolving from '../img/problemsolving.png';
import interpersonal from '../img/interpersonal.png';
import quicklearner from '../img/quicklearner.png';
import timemanagement from '../img/timemanagement.png';
import creativity from '../img/creativity.png';
import hardwork from '../img/hardwork.png';
import adaptability from '../img/adaptability.png';
 
const Skill = () => {
  return (
    <div style={{backgroundColor:'rgba(29, 29, 29, 0.992)'}}>
    <div className='skill-section'>
    <span className='skill-heading'>Skills</span>
    <div className='skill-container'>
        <div><div className='skill-card-heading'>Technical Skills</div>
        <motion.div 
      initial={{ opacity: 0, scale:0,y:-200}} 
      whileInView={{opacity :1, scale:1,y:0}}
      transition={{duration:0.8}}>
        <div className='skill-card'>
            
            <div className='card'>
                <img src={python} alt='python' className='skill-image'/>
                <p>Python</p>
            </div>
            <div className='card'>
                <img src={c} alt='c' className='skill-image'/>
                <p>C</p>
            </div>
            <div className='card'>
                <img src={java} alt='java' className='skill-image'/>
                <p>Java</p>
            </div>
            <div className='card'>
                <img src={html} alt='html' className='skill-image'/>
                <p>Html</p>
            </div>
            <div className='card'>
                <img src={css} alt='css' className='skill-image'/>
                <p>Css</p>
            </div>
            <div className='card'>
                <img src={javascript} alt='javascript' className='skill-image'/>
                <p>JavaScript</p>
            </div>
            <div className='card'>
                <img src={mysql} alt='mysql' className='skill-image'/>
                <p>Mysql</p>
            </div>
            <div className='card'>
                <img src={bootstrap} alt='bootstrap' className='skill-image'/>
                <p>Bootstrap</p>
            </div>
            <div className='card'>
                <img src={reactjs} alt='reactjs' className='skill-image'/>
                <p>Reactjs</p>
            </div>
            <div className='card'>
                <img src={git} alt='git' className='skill-image'/>
                <p>Git</p>
            </div>
            <div className='card'>
                <img src={github} alt='github' className='skill-image'/>
                <p>Github</p>
            </div>
            <div className='card'>
                <img src={netlify} alt='netlify' className='skill-image'/>
                <p>Netlify</p>
            </div>
            <div className='card'>
                <img src={visualstudio} alt='visualstudio' className='skill-image'/>
                <p>Visual Studio</p>
            </div>
            <div className='card'>
                <img src={springboot} alt='springboot' className='skill-image'/>
                <p>Springboot</p>
            </div>
        </div>
        </motion.div>
        </div>
        <div><div className='skill-card-heading'>Soft Skills</div>
        <motion.div 
      initial={{ opacity: 0, scale:0,y:-200}} 
      whileInView={{opacity :1, scale:1,y:0}}
      transition={{duration:0.8}}>
        <div className='skill-card2'>
            <div className='card2'>
                <img src={teamwork} alt='teamwork' className='skill-image'/>
                <p>TeamWork</p>
                <div className='skill-desc desc1'>I bring strong teamwork skills to projects, 
                ensuring good communication and a positive atmosphere to achieve shared goals.
                </div>
            </div>
                
            
            <div className='card2'>
                <img src={problemsolving} alt='problemsolving' className='skill-image'/>
                <p>Problem
                    <br></br>Solving</p>
                <div className='skill-desc desc2'>I use my problem-solving skills to efficiently tackle challenges,
                 making decisions under pressure to improve project outcomes.
                </div>
            </div>
            <div className='card2'>
                <img src={interpersonal} alt='interpersonal' className='skill-image'/>
                <p>Interpersonal Communication</p>
                <div className='skill-desc desc3'>I enhance team communication with strong interpersonal skills, 
                fostering a collaborative work environment in my future roles.
                </div>
            </div>
            <div className='card2'>
                <img src={quicklearner} alt='quicklearner' className='skill-image'/>
                <p>Quick<br></br>Learner</p>
                <div className='skill-desc desc4'>As a quick learner, I adapt swiftly to new technologies and tasks,
                 contributing effectively to diverse projects and environments.
                </div>
            </div>
            <div className='card2'>
                <img src={timemanagement} alt='timemanagement' className='skill-image'/>
                <p>  Time Management</p>
                <div className='skill-desc'>I apply time management skills to organize tasks, meet deadlines consistently, 
                and maximize productivity in all my professional endeavors.
                </div>
            </div>
            <div className='card2'>
                <img src={creativity} alt='creativity' className='skill-image'/>
                <p>Creativity</p>
                <div className='skill-desc'>In my work, I bring creativity to generate innovative ideas and solutions, 
                contributing to the success and growth of projects and initiatives.
                </div>
            </div>
            <div className='card2'>
                <img src={hardwork} alt='hardwork' className='skill-image'/>
                <p>Hardwork</p>
                <div className='skill-desc desc5'>I consistently achieve excellence results through hard work, 
                exceeding expectations and meeting project goals.
                </div>
            </div>
            <div className='card2'>
                <img src={adaptability} alt='adaptability' className='skill-image'/>
                <p>Adaptability</p>
                <div className='skill-desc desc6'>I adapt to changes and embrace new technologies 
                to contribute effectively to projects.
                </div>
            </div>
           
            
        </div>
        </motion.div>
        </div>
    </div>
    
    </div>
    </div>
  )
}

export default Skill;
