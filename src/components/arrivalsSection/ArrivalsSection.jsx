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
          Vitae fugiat laboriosam officia perferendis provident aliquid
          voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur
          commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
        </p>
        <button><Link to="/">Shop Now</Link></button>
      </div>
    </div>

    {/* arrivals section end */}

    </>
  )
}

export default ArrivalsSection