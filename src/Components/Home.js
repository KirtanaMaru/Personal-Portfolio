import React from 'react'
import './Home.css';
import girl from '../img/kirtana_avatar.png';
import { Link} from 'react-scroll';
import {motion} from 'framer-motion';


const Home = () => {
 
  return (
    <section className='home-section'>
      <motion.div 
      initial={{ opacity: 0, scale:0,x:100}} 
      whileInView={{opacity :1, scale:1,x:0}}
      transition={{duration:0.6}}><div className='heading'>  
      <span className='hello'>&#128075;</span>
		   <h1>Welcome To My World</h1>
		  </div>
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, scale:0,x:100}} 
      whileInView={{opacity :1, scale:1,x:0}}
      transition={{duration:0.6}}>
        <div className='intro'>
        <div className='intro-img'><img alt='girl' src={girl}/></div>
        <div className='textcontent'><h1>Kirtana Maru</h1>
        <ul className="dynamic-txts">
            <li className='li2'><span>Web Developer</span></li>
            <li ><span>Python Programmer</span></li>
        </ul>
        <p className='pdesc'>Eager to explore new challenges, 
          I bring a blend of creativity and dedication to make a positive impact in my professional role.</p>
        </div>
        <div className="social" >
        <a href="https://www.instagram.com/kirtana655/" style={{textDecoration:'none'}}><i class="fab fa-instagram"/></a>
        <a href="https://www.linkedin.com/in/kirtana-maru/" style={{textDecoration:'none'}}><i class="fa-brands fa-linkedin"/></a>
        <a href="https://github.com/KirtanaMaru" style={{textDecoration:'none'}}><i class="fa-brands fa-square-github"/></a>
        <a href="mailto:kirtanamaru123@example.com" style={{textDecoration:'none'}}><i class="fa-regular fa-envelope"></i></a>
        <a href="https://twitter.com/KirtanaMaru" style={{textDecoration:'none'}}><i class="fa-brands fa-twitter"></i></a>
        </div>
        <Link to="about" smooth={true} duration={500} style={{textDecoration:'none'}}><span className="hireme">About me</span></Link>
      </div>
      </motion.div>
      <div className="scrolldown">
        ScrollDown</div>
        <br></br>
        <Link to="about" smooth={true} duration={500} style={{textDecoration:'none'}}><span className='mouse'>
        <span className='wheel'></span>
      </span></Link>
      
    </section>
    
  )

}

export default Home
