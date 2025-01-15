import React from 'react'

const Banner = ({heading="Heading.." ,para="paragraph..",image="img1.png"}) => {
  return (
    <>
    <div className="outer">
    <div className='text'>
    <h1>{heading}</h1>
    <p>{para}</p>
    </div>
    <img src={image} alt="" style={{height:"90vh" ,width:"100%"}} />
    </div>
    </>
  )
}

export default Banner