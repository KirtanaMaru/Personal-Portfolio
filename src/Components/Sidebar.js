import React, { useState,useRef } from 'react';
import './Sidebar.css';
import { Link} from 'react-scroll';

const Sidebar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const iconMenuRef = useRef()
  window.addEventListener('click',((e)=>{
    if(e.target!== iconMenuRef.current){
      setShowMediaIcons(false);
    }
  }))
  return (
    <section>
       <div className='sidebar'>
        <div className='sidetitle'><h1>K<span style={{padding:'0px 5px',color:'red'}}><b>.</b></span></h1></div>
       
        <div className={showMediaIcons ? "navbar mobile-navbar" : "navbar"}>
        <Link to="home" smooth={true} duration={500} style={{textDecoration:'none'}}><i className="icon-home navbar-icon" title='Home'><span>Home</span></i></Link>
        <Link to="about" smooth={true} duration={500} style={{textDecoration:'none'}}><i className="icon-user-following navbar-icon" title='About'><span>About</span></i></Link>
        <Link to="education" smooth={true} duration={500} style={{textDecoration:'none'}}><i className="icon-graduation navbar-icon" title='Education'><span>Education</span></i></Link>
        <Link to="skills" smooth={true} duration={500} style={{textDecoration:'none'}}><i className="icon-badge navbar-icon" title='Skills'><span>Skills</span></i></Link>
        <Link to="projects" smooth={true} duration={500} style={{textDecoration:'none'}}><i className="icon-layers navbar-icon " title='Projects'><span>Projects</span></i></Link>
        <Link to="contact" smooth={true} duration={500} style={{textDecoration:'none'}}><i className="icon-bubble navbar-icon " title='Contact'><span>Contact</span></i></Link>
        </div>
        
       
        <div className='side-footer'>
        <span className='copyright'>&copy; 2023 - 2024.</span>
        <i ref={iconMenuRef}className="icon-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}></i>
        </div>
      </div>
    </section>
  )
}

export default Sidebar
