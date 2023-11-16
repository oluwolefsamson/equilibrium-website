import React from 'react'
import Header from '../../components/Header/Header'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <div className='contactpage-container'>
        < Header />
        < Contact />
        < Footer /> 
    </div>
  )
}

export default ContactPage
