import React from 'react'
import './Footer.css';
import { Link} from 'react-scroll';
const Footer = () => {
  return (
    <div>
      <div className='footer-section'>
        <div className='footer-left'>
          <div className='footer-heading'>Kirtana Portfolio</div>
          <div style={{paddingBottom:'30px'}}>Thank you for visiting my personal portfolio website . Connect with me over socials.</div>
          <div>Like <span className="heart">&#x2665;</span> my personal portfolio </div>
        </div>
        <div className='footer-middle'>
          <div className='footer-heading'>Quick Links</div>
          <div style={{lineHeight:'30px'}} className='footer-navbar'>
          <Link to="home" smooth={true} duration={500} style={{textDecoration:'none',color:'white'}}><div className='footer-nav'><i class="fa-solid fa-chevron-right"/>Home</div></Link>
          <Link to="about" smooth={true} duration={500} style={{textDecoration:'none',color:'white'}}><div className='footer-nav'><i class="fa-solid fa-chevron-right"></i>About</div></Link>
          <Link to="education" smooth={true} duration={500} style={{textDecoration:'none',color:'white'}}><div className='footer-nav'><i class="fa-solid fa-chevron-right"></i>Education</div></Link>
          <Link to="skills" smooth={true} duration={500} style={{textDecoration:'none',color:'white'}}><div className='footer-nav'><i class="fa-solid fa-chevron-right"></i>Skill</div></Link>
          <Link to="projects" smooth={true} duration={500} style={{textDecoration:'none',color:'white'}}><div className='footer-nav'><i class="fa-solid fa-chevron-right"></i>Project</div></Link>
          </div>
        </div>
        <div className='footer-right'>
          <div className='footer-heading'>Contact Info</div>
          <div><i class="fa-solid fa-phone" style={{color:'white',marginRight:'10px'}}></i>9552098476</div>
          <div><i class="fa-solid fa-envelope"style={{color:'white',marginRight:'10px'}}></i>kirtanamaru123@gmail.com</div>
          <div className="social" >
        <a href="https://www.instagram.com/kirtana655/" style={{textDecoration:'none'}}><i class="fab fa-instagram"/></a>
        <a href="https://www.linkedin.com/in/kirtana-maru/" style={{textDecoration:'none'}}><i class="fa-brands fa-linkedin"/></a>
        <a href="https://github.com/KirtanaMaru" style={{textDecoration:'none'}}><i class="fa-brands fa-square-github"/></a>
        <a href="mailto:kirtanamaru123@example.com" style={{textDecoration:'none'}}><i class="fa-regular fa-envelope"></i></a>
        <a href="https://twitter.com/KirtanaMaru" style={{textDecoration:'none'}}><i class="fa-brands fa-twitter"></i></a>
        </div>
        </div>
      </div>
      <div style={{textAlign:'center',fontSize:'18px',padding:'20px'}}>Designed <span className="heart">&#x2665;</span>By Kirtana Maru</div>
    </div>
  )
}

export default Footer
