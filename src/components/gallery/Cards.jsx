import React from 'react'

const Cards = ({category="Itemss",image="shirt.png",price=1}) => {
  return (
    <>
        <div className="boxes">
          <div className="img-des"><img src={image} alt="" /></div>
          <div className="pro-des">
            <h2>{category}</h2>
              <h3>${price}</h3>
            
          </div>
          <div className="sub">
            <div className="btn-1"><button className="cart">Add to cart</button></div>
            <div className="btn-2"><button className="buy">Buy now</button></div>
          </div>
        </div>
    </>
)
}

export default Cards