// Hero.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './hero.css';
import Testimonial from '../testimonial/Testimonial';
import Gallery from '../gallery/Gallery';
import ShopSection from '../shopSection/ShopSection';
import SubscribeSection from '../subscribeSection/SubscribeSection';
import ArrivalsSection from '../arrivalsSection/ArrivalsSection';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const headerText = document.querySelector('.header-text');
      const scrollPosition = window.scrollY;
      
      if (headerText) {
        const opacity = 1 - (scrollPosition * 0.003);
        const transform = `translateY(${scrollPosition * 0.3}px)`;
        headerText.style.opacity = opacity > 0 ? opacity : 0;
        headerText.style.transform = transform;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="hero-section">
        <div className="hero-overlay"></div>
        <div className="header-text">
          <h1 className="animate-slide-down">
            Sale 20% Off <span>On Everything</span>
          </h1>
          <p className="animate-slide-up">
            Enjoy exclusive savings on all our products! Shop now and take advantage 
            of this limited-time offer to elevate your style, enhance your space, 
            or find the perfect gift.
          </p>
          <button className="animate-fade-in">
            <Link to="/">Shop Now</Link>
          </button>
        </div>
      </header>

      <ShopSection />
      <ArrivalsSection />
      <Gallery />
      <SubscribeSection />
      <Testimonial />
    </>
  );
};

export default Hero;