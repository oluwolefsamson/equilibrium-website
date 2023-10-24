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
    

            {/* center */ }
       <div className="f-center">
        <h2 className='primaryText f-con'>Contact</h2>

        <div className="good">
        <div className="span-loc">
        <ImLocation2 className='secondaryText span1' size={20} />
        <span className='secondaryText'>Suite 203 Anbeez Plaza Opp Former CAC 
        Office Ndola Crescent Wuse Zone 5 Abuja.</span>
        </div>
       
        <div className="span-phone">
        <AiTwotonePhone className='secondaryText span2' size={20} />
            <span className='secondaryText '>+234 803 7552 910 +234 706 6299 202</span>
        </div>
        
        <div className="span-mail">
        <HiOutlineMail className='secondaryText span3' size={20} />
            <span className='secondaryText'>equilibriummetrohomes@gmail.com</span>
        </div>

        <div className="span-ins">
        <FiInstagram className='secondaryText span4' size={20} />
            <span className='secondaryText'>equilibriummetrohomes</span>
        </div> 
        </div>
   
       
       
       
       </div>

         {/* right */ }

       <div className="f-right">
       <h2 className='primaryText f-fol'>Follow Us</h2>
       <div className="follow secondaryText">
            <a href=""><FiInstagram size={25} /></a>
            <a href=""><BsFacebook size={25} /></a>
            <a href=""><FaXTwitter size={25}  /></a>
       </div>
       </div>
    </section>
  )
}

export default Footer
