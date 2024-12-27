// import React, { Component } from "react";



// class Form extends Component {
//     constructor() {
//         super()
//         this.state={name:"", output:""}

//     }

//     handlechange=(e)=>{
//         // const namee=e.target.value
//         // console.log(namee)
//         this.setState({name:e.target.value})
//     }
//     handlesubmit=(e)=>{
//         e.preventDefault()
//         this.setState({ output:this.state.name})
//     }
//     render(){
//         return (
//             <div>
//                 <form onSubmit={this.handlesubmit}>
                
//                   <input type="text" name="form" onChange={this.handlechange}></input>  
//                   <input type="submit"/>
//                 </form>
//                 <p>{this.state.output}</p>
//             </div>
//         )
//     }

// }
// export default Form;


import React, { Component } from "react";



class Form extends Component {
    constructor() {
        super()
        this.state={name:"", output:"",form1:""}

    }

    handlechange=(e)=>{
        const{name,value}=e.target
        this.setState({[name]:value})
    }
    handlesubmit=(e)=>{
        e.preventDefault()
        this.setState({ output:this.state.name+this.state.form1})
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                
                  <input type="text" name="form" onChange={this.handlechange}></input>
                  <input type="text" name="form1" onChange={this.handlechange}></input>    
                  <input type="submit"/>
                </form>
                <p>{this.state.output}</p>
            </div>
        )
    }

}
export default Form;