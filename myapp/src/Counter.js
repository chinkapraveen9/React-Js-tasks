
import React,{Component} from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state={a:0}
    }
    add=()=>{
        this.setState(
            {a:this.state.a+1})
    }

    min=()=>{
        this.setState({
            a:this.state.a-1 
        })
    }
    render(){
        return(
            <div>
                <h1>
                    {this.state.a}
                </h1>
                <button onClick={this.add}>add</button>
                <button onClick={this.min}>min</button>
            </div>
        )
    }
}
export default Counter;