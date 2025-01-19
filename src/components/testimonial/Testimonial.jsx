import React from "react";
import "./testimonial.css";
import client from '../../assets/images/client.jpg'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const Testimonial = () => {
  return (
    <>
      {/* <!-- testimonial section starts--> */}
      <div className="testimonial">
        <h1>Customer's Testimonial</h1>

        <div className="slide-bar">
          <div className="slider">
            <button>
              <FaArrowLeftLong />
            </button>
            <img src={client} alt="" />
            <button>
              <FaArrowRightLong />
            </button>
          </div>
          <div className="detail-box">
            <h5>Anna Trevor</h5>
            <h6>Customer</h6>
            <p>
            I had an amazing experience! The service was excellent, and the quality exceeded my expectations. I will definitely be coming back for more.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- testimonial section ends--> */}
    </>
  );
};

export default Testimonial;
