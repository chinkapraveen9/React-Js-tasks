import React from "react";


function child(props){
  return(
    <div>
       <h1>{props.name}  {props.city}</h1>
    </div>
  )
}
export default child;




// import React, { Component } from "react";
// class Toggle extends Component{
//   constructor(){
//     super()
//     this.state={ison: true};

//   }
//   handleButton ={}=>{
// this.setstate
//   }
// }



// import React from "react";
//  class sampleform extends React.Component{
//     constructor(){
//       super()
//       this.state={text:"hello"}
//     }
//     render(){
//       return(<>
//       <form>
//         <input type="text"/>
//         <input type="submit"/>
//         </form>
//         <h1> </h1>
//       </> 
        
//       )
//     }
//  }
//  export default render;