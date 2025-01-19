import React from 'react'
import './arrivalsSection.css'
import { Link } from 'react-router-dom'

const ArrivalsSection = () => {
  return (
    <>
    
     {/* arrivals section start */}
    <div className="arrivals">
      <div className="arrival-text">
        <h2>#New Arrivals</h2>

        <p>
        Discover the latest trends in fashion and accessories with our new arrivals. From chic designs to timeless classics, each piece is crafted to elevate your style. Explore now and find your next favorite look!
        </p>
        <button><Link to="/">Shop Now</Link></button>
      </div>
    </div>

    {/* arrivals section end */}

    </>
  )
}

export default ArrivalsSection