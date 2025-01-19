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
        Be the first to know about our latest discounts, sales, and special promotions. Sign up now and save more on your next purchase!
      </p>
      <form>
        <input type="email" placeholder="Enter Your Email" id="email" />
        <Link to="/">Subscribe</Link>
      </form>
    </div>

    {/* <!-- Subscribe section ends --> */}
    </>
  )
}

export default SubscribeSection