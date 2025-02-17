import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <>
        {/* <!-- Footer section starts --> */}

        <footer>
      <div className="container">
  <div className="details">

    <div className="logo-img">    
      <img src={logo} alt=""/>
    </div>
    <p><strong>Address:</strong> 123 Fake Street, Imaginary Colony, Mumbai, Maharashtra, India</p>
    <p><strong>Telephone:</strong> +91 900 123 4567</p>
    <p><strong>Email:</strong> demoemail@example.com</p>
    </div>

    <div className="menu">
      <h3>Menu</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Services</Link></li>
        <li><Link to="/testimonial">Testimonial</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
<div className="account">
  <h3>Account</h3>

  <ul>
    <li><Link to="/">Account</Link></li>
    <li><Link to="/">Checkout</Link></li>
    <li><Link to="/">Login</Link></li>
    <li><Link to="/">Register</Link></li>
    <li><Link to="/">Shoping</Link></li>
    <li><Link to="/">Widget</Link></li>
  </ul>
</div>

  <div className="news-letter">
    <h3>NEWSLETTER</h3>
    <p>Subscribe to our newsletter and get daily updates.</p>
    <form >
    <input type="email" placeholder="Enter Your Email" id="email" />
    <button id="email"><Link to="/">Subscribe</Link></button>
    </form>

</div>

  </div>
   </footer>
    {/* <!-- Footer section ends --> */}
  
  {/* <!-- copy right section starts --> */}

  <div className="copy-right">
    <p className="">© 2021 All Rights Reserved By <a href="https://html.design/" target="_blank">Free Html Templates</a><br/>
       Distributed By <a href="https://themewagon.com/" target="_blank">ThemeWagon</a>
    </p>
 </div>
  {/* <!-- copy right section ends--> */}

    </>
  )
}

export default Footer