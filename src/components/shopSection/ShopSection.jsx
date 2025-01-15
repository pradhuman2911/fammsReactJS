import React from 'react'
import './shopSection.css'
import free from '../../assets/images/free.png'
import medal from '../../assets/images/medal.png'
import shipped from '../../assets/images/shipped.png'
const ShopSection = () => {
  return (
    <>
    
    {/* <!-- Shop section start --> */}
    <div className="shop">
      <h1>Why Shop With Us</h1>
      <div className="services">
        <div className="service-box">
          <img src={shipped} alt="" />
          <h2>Fast Delivery</h2>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="service-box">
          <img src={free} alt="" />
          <h2>Free Shiping</h2>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="service-box">
          <img src={medal} alt="" />
          <h2>Best Quality</h2>
          <p>variations of passages of Lorem Ipsum available</p>
        </div>
      </div>
    </div>
    {/* <!-- Shop section ends--> */}


    </>
  )
}

export default ShopSection