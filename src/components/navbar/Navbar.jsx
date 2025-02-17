// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-main">
          {/* Logo */}
          <div className="logo">
            <img src="./src/assets/logo.png" alt="logo" />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <NavLinks />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <NavLinks mobile />
        </div>
      </div>
    </nav>
  );
};

const NavLinks = ({ mobile = false }) => {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const togglePages = () => {
    setPagesOpen(!pagesOpen);
  };

  return (
    <ul className={`nav-links ${mobile ? 'mobile' : ''}`}>
      <li className={activeLink === 'home' ? 'active' : ''}>
        <Link to="/" onClick={() => setActiveLink('home')}>HOME</Link>
      </li>
      <li className={`pages-dropdown ${pagesOpen ? 'active' : ''}`}
       onMouseEnter={() => setPagesOpen(true)}
       onMouseLeave={() => setPagesOpen(false)}
      >
        <button
          className="dropdown-trigger"
          onClick={togglePages}
        >
          PAGES
          <FaCaretDown className={`dropdown-icon ${pagesOpen ? 'open' : ''}`} />
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link to="/about" onClick={() => setActiveLink('about')}>About</Link>
          </li>
          <li>
            <Link to="/testimonial" onClick={() => setActiveLink('testimonial')}>Testimonial</Link>
          </li>
        </ul>
      </li>
      <li className={activeLink === 'products' ? 'active' : ''}>
        <Link to="/products" onClick={() => setActiveLink('products')}>PRODUCTS</Link>
      </li>
      <li className={activeLink === 'blog' ? 'active' : ''}>
        <Link to="/blog" onClick={() => setActiveLink('blog')}>BLOG</Link>
      </li>
      <li className={activeLink === 'contact' ? 'active' : ''}>
        <Link to="/contact" onClick={() => setActiveLink('contact')}>CONTACT</Link>
      </li>
      <li className="icon-link">
        <Link to="#"><FaSearch /></Link>
      </li>
      <li className="icon-link">
        <Link to="#"><FaCartShopping /></Link>
      </li>
    </ul>
  );
};

export default Navbar;