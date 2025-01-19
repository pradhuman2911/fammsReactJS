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
          <p>Enjoy swift and reliable delivery, ensuring your purchases arrive on time and in perfect condition.</p>
        </div>
        <div className="service-box">
          <img src={free} alt="" />
          <h2>Free Shiping</h2>
          <p>Get free shipping on all orders, making your shopping experience hassle-free and budget-friendly.</p>
        </div>
        <div className="service-box">
          <img src={medal} alt="" />
          <h2>Best Quality</h2>
          <p>We provide top-notch products, carefully selected for their durability, design, and excellence.</p>
        </div>
      </div>
    </div>
    {/* <!-- Shop section ends--> */}


    </>
  )
}

export default ShopSection