import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Company from './components/Company/Company';
import Residency from './components/Residencies/Residency';
import Values from './components/Values/Values';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import ManagementTeam from './components/ManagementTeam/ManagementTeam';
import Footer from './components/Footer/Footer';
import AboutCard from './components/AboutCard/AboutCard';



const App = () => {
  return (
    
      <div>
        
        <Header />
        <Hero />
        <Company />
        <Residency />
        <Values />
        <AboutCard />
        <Contact />
        <GetStarted />
        <ManagementTeam />
        <Footer /> 
      </div>
      
 

  )
}

export default App
