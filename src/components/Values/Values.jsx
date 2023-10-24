import React, {useEffect} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md';
import './Values.css';
import data from '../../Utils/accordion';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS


const Values = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
    
  return (
    <section className='v-wrapper'>
      <div className="paddings innerWidth flexCenter v-container">
        
        {/* leftside */}


        <div data-aos="fade-up"
     data-aos-duration="3000">

        <div className="v-left">
            <div className="image-container1">
                <img src="./values.jpg" alt="" />
            </div>
            </div>
            

        </div>

        {/*rigt side*/ }
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">

        <div className="flexColStart v-right">
            <span className='greenText'>Our Core Values</span>
            <span className='primaryText'>The Values We Offer to You</span>
            <span className='secondaryText'>Accountability, Customer Focus, Innovation 
            <br /> Team Work, Excellence and Professionalism.</span>


            <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className='accordion'
            >
                {
                    data.map((item, i) => {
                        return (
                            <AccordionItem className='accordionItem 'key={i}  uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='accordionButton flexCenter'>

                                        <div className="flexCenter icon">
                                            {item.icon}
                                        </div>
                                        <span className='greenText'>{item.heading}</span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20}/>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                }   
            </Accordion>
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default Values
