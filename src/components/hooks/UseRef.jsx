import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [count,setCount] = useState(0);

    const renderCount=useRef(0);
    useEffect(()=>{
        renderCount.current += 1;
    })

    const increment =()=>{
        setCount(count+1)
        // setRCount(renderCount+1);
    }
    
    const decrement =()=>{
        setCount(count-1)
        // setRCount(renderCount+1);
    }

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

<button onClick={increment} style={{
            border:"4px ridge red",
            backgroundColor: "green",
            color: "white",
            padding: "10px 50px",
            cursor: "pointer",
            margin: "10px",
          }}>INCREMENT</button>
<h1>{count}</h1>
<button onClick={decrement} style={{
            border:"4px ridge red",
            backgroundColor: "green",
            color: "white",
            padding: "10px 50px",
            cursor: "pointer",
            margin: "10px",
          }}>DECREMENT</button>
<h1>Render count {renderCount.current}</h1>
</div>
</>
)
}

export default UseRef;