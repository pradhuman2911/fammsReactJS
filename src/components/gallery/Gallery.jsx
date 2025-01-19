import React from 'react'
import './gallery.css';
import Cards from './Cards';
import {product} from '../../data.js';
import { Link } from 'react-router-dom';
const Gallery = () => {
  return (
    <>
    <div className="products">
      <div className="heading">
        <h1>Our <span>products</span></h1>
      </div>

      <div className="our-products">
            {
                product.map((item,index)=>{
                    return(
                    <Cards key={item.id || index} category={item.cate} price={item.price} image={item.image}/>
                    )
                })
            }
      </div>

      <div className="view-all-btn">
        <Link to="" className="v-all-btn">View All Products</Link>
      </div>
    </div>
    </>
  )
}

export default Gallery