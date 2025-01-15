import React from 'react'
import Gallery from '../gallery/Gallery'


const Products = () => {
  return (
    <>
        <section className="inner_page_head">
         <div className="container_fuild">
            <div className="row">
               <div className="col-md-12">
                  <div className="full">
                     <h3>Product Grid</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <Gallery/>
    </>
  )
}

export default Products