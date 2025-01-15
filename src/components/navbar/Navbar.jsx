import React from 'react'
import logo from '../../assets/logo.png' 
import './navbar.css'
import {FaSearch ,FaCaretDown } from  "react-icons/fa"
import {FaCartShopping } from  "react-icons/fa6"
import {Link} from "react-router-dom";
const Navbar = () => {
  return (

<nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" width="150px" />
      </div>
      <div className="navlinks">
        <ul className="links">
          <li><Link to="/">HOME</Link></li>
          <li className="pg-down">
          <li><Link to="">PAGES<FaCaretDown className='down' /></Link></li>
            <ul className="dropdown">
              <li className="dropdown-item"><Link to="/about" class="dropdown-link">About</Link></li>
              <li className="dropdown-item"><Link to="/testimonial" class="dropdown-link">Testimonial</Link></li>
          </ul>
          </li>
          <li><Link to="/products">PRODUCTS</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li><Link to="/"><FaSearch/></Link></li>
          <li><Link to="/"><FaCartShopping /></Link></li>

          
        </ul>
      </div>
</nav>

)
}

export default Navbar