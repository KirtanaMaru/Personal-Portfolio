import React from 'react'
import'./Contact.css';
import contact_img from '../img/contact.gif';
import { useForm, ValidationError } from '@formspree/react';
import {motion} from 'framer-motion';
const Contact = () => {
  const [state, handleSubmit] = useForm("mleqezwq");
  if (state.succeeded) {
      return alert("Thank You for Contact Me!! I will reply you soon..");
  }
  return (
    <div style={{backgroundColor:'rgba(29, 29, 29, 0.992)'}}>

        <div className='contact-section'>
            <div className='contact-heading'>Contact us</div>
            <motion.div 
      initial={{ opacity: 0, scale:0,y:-200}} 
      whileInView={{opacity :1, scale:1,y:0}}
      transition={{duration:0.8}}>
            <div className='contact-card'>
                <img src={contact_img} alt='contact_img' className='contact-img'/>
                
                <div className='contact-inner-card'>
                <form onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='Name'></input>
                <input type='text' name='email' placeholder='Email'></input>
                <ValidationError 
                 prefix="Email" 
                 field="email"
                 errors={state.errors}
                />
                <input type='text' name='phone' placeholder='Phone'></input>
                <textarea name='message' placeholder='Message'/>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
                <input type='submit' disabled={state.submitting}></input>
                </form>
                </div>
                
            </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Contact
