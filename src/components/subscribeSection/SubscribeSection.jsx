import React from 'react'
import './subscribeSection.css'
import { Link } from 'react-router-dom';

const SubscribeSection = () => {
  return (
    <>
        {/* <!-- Subscribe section starts --> */}
        <div className="subscribe">
      <h3>Subscribe To Get Discount Offers</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <form>
        <input type="email" placeholder="Enter Your Email" id="email" />
        <button><Link to="/">Subscribe</Link></button>
      </form>
    </div>

    {/* <!-- Subscribe section ends --> */}
    </>
  )
}

export default SubscribeSection