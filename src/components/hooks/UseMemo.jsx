import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [number,setNumber]=useState(0);
    const [count,setCount]=useState(0);
    const square=(n)=>{
        console.log("square is called",n);
        return Math.pow(n,2);
    }
    const store = useMemo(()=>square(number),[number]);
  return (
    <>
    <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
    <h1>Hello this is square {store}</h1>

    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <h1>This is count {count}</h1>
    <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    </>
  )
}

export default UseMemo