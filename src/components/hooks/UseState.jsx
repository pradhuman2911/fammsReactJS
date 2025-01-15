import { useState } from "react";

const UseState = () => {
  let [name, setName] = useState({
    names: "Pradhuman",
    tech: "Java",
  });

  const change = () => {
    if (name.names == "Pradhuman" && name.tech == "Java") {
      setName({ names: "Psr", tech: "JavaScript" });
    } else {
      setName({ names: "Pradhuman", tech: "Java" });
    }
  };

let [bgColor,setColor]= useState("");
const change2=()=>{
  setColor(document.body.style.backgroundColor="blue");
}
 

  //    const increment=()=>{
  //     if(count<=20){
  //         setCount(count++);
  //         console.log(`button - clicked-> COUNT= ${count} times`);
  //     }
  //     }
  //    const decrement=()=>{
  //         if(count>0){
  //             setCount(count--);
  //             console.log(`button + clicked-> COUNT= ${count} times`);
  //         }
  //         }

  // let count = 0;
  // const increment=()=>{
  //     count++;
  //     console.log(`+ button clicked-> ${count} times`);
  // }
  // const decrement = ()=>{
  //     count--;
  //     console.log(`- button clicked-> ${count} times`);
  // }

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
        <h1>
          My name is {name.names} & I am a {name.tech} developer
        </h1>
        <button
        className="btn"
          onClick={change}
          style={{
            border:"4px ridge red",
            backgroundColor: "green",
            color: "white",
            padding: "10px 50px",
            cursor: "pointer",
            margin: "10px",
          }}
        >
          Update name!
        </button>
        <button 
        onClick={change2}
          style={{
            border:"4px ridge red",
            backgroundColor: "green",
            color: "white",
            padding: "10px 50px",
            cursor: "pointer",
            margin: "10px",
          }}>Upadte BgColor!</button>
        {/* 
<button className="btn1" style={{backgroundColor:"blue" , color:"white", padding:"10px 80px",cursor:"pointer" }} onClick={decrement}>-</button>
<h1 style={{fontSize:"50px"}}>{count}</h1>
<button className="btn2" style={{backgroundColor:"blue" , color:"white", padding:"10px 80px",cursor:"pointer" }} onClick={increment} >+</button> */}
      </div>
    </>
  );
};
export default UseState;
