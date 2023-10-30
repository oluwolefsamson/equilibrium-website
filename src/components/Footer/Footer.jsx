import React from 'react'
import './Footer.css';
import {ImLocation2} from 'react-icons/im';
import {AiTwotonePhone} from 'react-icons/ai';
import {HiOutlineMail} from 'react-icons/hi';
import {FiInstagram} from 'react-icons/fi';
import {BsFacebook} from 'react-icons/bs'
import {FaXTwitter} from 'react-icons/fa6'

const Footer = () => {
  return (
    <section className='f-wrapper'>
              {/* first */ }
    
       
        <h2 className='primaryText f-con'>Contact</h2>
        <div className="foot">

        <div className="good">
        <ImLocation2 className='secondaryText' size={20} style={{ marginBottom: '5px'}}/>
        <HiOutlineMail className='secondaryText' size={20} />
        <AiTwotonePhone className='secondaryText' size={20} />
        <FiInstagram className='secondaryText span4' size={20} />
        </div>
        
          <div className="secondaryText write">
        <span className='span1'>Suite 203 Anbeez Plaza Wuse Opposite Former CAC Office Ndola Crescent Wuse Zone 5 Abuja.</span><br />
        <span>equilibriummetrohomes@gmail.com</span><br />
        <span>+234 805 4288 271, +234 706 6299 202</span><br />
        <span>equilibriummetrohomes</span><br />
          </div>
        </div>

        <h2 className='primaryText follow-h2'>Follow Us</h2>
        <div className="follow secondaryText">
          <a href="#"><span><BsFacebook size={30} /></span></a>
          <a href="#"><span><FaXTwitter size={30} /></span></a>
          <a href="https://www.instagram.com/equilibriummetrohomes"><span><FiInstagram size={30} /></span></a>
        </div>

       
    </section>
  )
}

export default Footer
