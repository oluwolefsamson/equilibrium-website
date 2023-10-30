import React from 'react'
import './Residency.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import data from '../../Utils/slider.json';
import { sliderSettings } from '../../Utils/common';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {AiOutlineArrowRight} from 'react-icons/ai'

const Residency = () => {
  return (
    <section className='r-wrapper'>
      <div className='paddings innerWidth r-container'>
        <div className='r-head flexColStart'>
          <span className='greenText'>Ideal Selections</span>
          <span className='primaryText'>Top-choice Residencies</span>
        </div>
        

        <Swiper {...sliderSettings}>
        <SliderButtons />
          {
            data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className=' flexColStart r-card'>
                  <img src={card.image} style={{ borderRadius: '20px' }}  alt='home' />
                  
                  <span className='secondaryText r-price' >
                    <span style={{ color: 'orange', fontSize: '1.2rem', fontWeight: '600'}}>$</span>
                      <span style ={{ fontSize: '1.2rem', fontWeight: '600'}}>{card.price}</span>
                  </span>

                  <span style ={{ fontSize: '1.5rem' }} className='primaryText r-name'>{card.name}</span>
                  <span style ={{ fontSize: '0.7rem', width: '15rem' }} className='secondaryText card-detail'>{card.detail}</span>
                </div>
              </SwiperSlide>
            ))
          }
         
        </Swiper>
      </div>

      
    </section>
  );
};

export default Residency

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className='r-buttons flexCenter'>
      <button onClick={() => swiper.slidePrev()}><AiOutlineArrowLeft color='green' /></button>
      <button onClick={() => swiper.slideNext()}><AiOutlineArrowRight color='green' /></button>
    </div>
  )
}
    
