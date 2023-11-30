import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

import './ContactPage.css'

const ContactPage = () => {
  return (
    <div className='contactpage-container'>
        < Header />
        < Hero />
        < Contact />
        < Footer /> 
    </div>
  )
}

export default ContactPage
