import React from 'react';
import './Hero.css';
import { BiMap } from 'react-icons/bi'
import CountUp from 'react-countup';
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-container'>

        {/* left side */}
        <div className='flexColStart hero-left'>
            <div className='hero-title'>
                <div className='orange-circle' />

                <motion.h1
                initial={{y: '2rem', opacity: '0'}}
                animate={{y: 0, opacity:1}}
                transition={{
                  duration:5,
                  type: 'spring'
                }}>

                Explore <br />The Ideal <br /> Property Option
                </motion.h1>
            </div>

            <div className='white-gradient' />

            <div className='flexColStart hero-des'>
                <span className='secondaryText'>Identify a range of properties that match your preferences effortlessly.</span>
                <span className='secondaryText'>Overlook any challenges in securing a place to live for yourself.</span>
            </div>
            
            <div className=' flexCenter search-bar'>
            < BiMap color='green' style={{ fontSize: '1.5rem' }}/> 
            <input type='text' />
            <button>Search</button>
            </div>

            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span style={{ fontSize: '2rem' }}>
                  <CountUp start={8800} end={9000} duration={5} />
                  <span style={{ color: 'green', marginLeft: '5px' }}>+</span><br />
                </span>
                 <span className='secondaryText'>Premium Products</span> 
              </div>

              <div className="flexColCenter stat">
                <span style={{ fontSize: '2rem' }}>
                  <CountUp start={1950} end={2000} duration={5} />
                  <span style={{ color: 'green', marginLeft: '5px' }}>+</span>
                </span>
                 <span className='secondaryText'>Happy Customers</span> 
                
              </div>

              <div className="flexColCenter stat">
                <span style={{ fontSize: '2rem' }}>
                  <CountUp end={35} duration={5} />
                  <span style={{ color: 'green', marginLeft: '5px' }}>+</span>
                </span>
                 <span className='secondaryText'>Award Winning</span> 
               
              </div>
            </div>
        </div>

        {/* right side */}
      <div className='flexCenter hero-right'>
         <motion.div
         initial={{x: '7rem', opacity: 0}}
         animate={{x: 0 , opacity: 1}}
         transition={{
          duration: 5,
          type: 'spring' 
         }} 
         
         className='image-container'>
            <img src='./hero-image.jpg' alt='' />
         </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
