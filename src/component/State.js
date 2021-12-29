import React from "react";

class State extends React.Component{
    constructor(){
        super();
        this.state = {
            message :'Welcome To Page'
        }
    }
     
    changeMessage(){
        this.setState({
            message:'Thanks you Subscribing'
        })
    }
    render(){
        return(<div>
            <h1>{this.state.message}</h1>
            <button onClick={ ()=> this.changeMessage()}>subscribe</button>
        </div>)
    }
}
export default State;