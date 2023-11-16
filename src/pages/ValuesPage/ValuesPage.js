import React from 'react'
import Header from '../../components/Header/Header'
import Values from '../../components/Values/Values'
import Footer from '../../components/Footer/Footer'
import './ValuesPage.css'


const ValuesPage = () => {
  return (
    <div className='valuespage-container'>
        <Header />
        <Values />
        <Footer />
    </div>
  )
}

export default ValuesPage
