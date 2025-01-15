import React from 'react'
import './about.css'
import ShopSection from '../shopSection/ShopSection'
import ArrivalsSection from '../arrivalsSection/ArrivalsSection'
const About = () => {
  return (
    <>
    <section className="inner_page_head">
         <div className="container_fuild">
            <div className="row">
               <div className="col-md-12">
                  <div className="full">
                     <h3>About Us</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <ShopSection/>
      <ArrivalsSection/>
    </>
  )
}

export default About