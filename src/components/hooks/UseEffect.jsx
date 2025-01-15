import React, { useState , useEffect } from 'react'

const UseEffect = () => {

    const [count,setCount]=useState(0);
    useEffect(()=>{

        setTimeout(() => {
            setCount(count+1)
        }, 2000);

    },[])


  return (
    <>
    <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <h1>{count}</h1>

      </div>
    </>
  )
}

export default UseEffect