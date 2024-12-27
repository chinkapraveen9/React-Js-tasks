// import React, { useState } from "react";

// function Unique() {
//   const [name,setname]=useState("hi praveen")

//  const handlesubmit=()=>{
//   setname("karthik")
//  } 

//   return(
//     <div>
//       {name}
//       <button onClick={handlesubmit}>clickme </button>
//     </div>
//   )
// }

// export default Unique;


// counter function



import  React, { useState } from "react";

function Adding() {
  const [name,setname]=useState(0,)
  // const [min,karthik]=useState(0,)

 const handlesubmit=()=>{
  setname(name+1)
  
 } 

//  const fin=()=>{
//   min(min-1)
  
//  } 
  return(
    <div>
      {name}
      <button onClick={handlesubmit}>clickme </button>
      {/* <button onClick={fin}>clickme</button> */}
    </div>
  )
}

export default Adding;
