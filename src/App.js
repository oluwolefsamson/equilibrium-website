import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Company from './components/Company/Company';
import Residency from './components/Residencies/Residency';
import Values from './components/Values/Values';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    
      <div>
        
        <Header />
        <Hero />
        <Company />
        <Residency />
        <Values />
       <Contact />
       <GetStarted />
      <Footer />
        
      </div>
      
 

  )
}

export default App
