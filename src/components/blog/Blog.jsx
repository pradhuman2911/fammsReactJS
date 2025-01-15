import ShopSection from '../shopSection/ShopSection'
import './blog.css'
import React from 'react'


const Blog = () => {
  return (
    <>
        <section className="inner_page_head">
         <div className="container_fuild">
            <div className="row">
               <div className="col-md-12">
                  <div className="full">
                     <h3>Blog</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <ShopSection/>
    </>
  )
}

export default Blog