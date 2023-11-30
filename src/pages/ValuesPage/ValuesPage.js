import React from 'react'
import Header from '../../components/Header/Header'
import Values from '../../components/Values/Values'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import './ValuesPage.css'


const ValuesPage = () => {
  return (
    <div className='valuespage-container'>
        < Header />
        < Hero />
        < Values />
        < Footer />
    </div>
  )
}

export default ValuesPage
