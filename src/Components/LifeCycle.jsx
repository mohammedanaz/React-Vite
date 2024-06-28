import React, {Component} from "react";

class LifeCycle extends Component{
    state = {
        count : 0
    }
    componentDidMount(){
        console.log('component did mount called', this.state.count);
    }
    componentDidUpdate(){
        console.log('component did update called', this.state.count);
    }
    handleIncrement = ()=>{
        this.setState((prevState)=> ({count: prevState.count+1}))
    }
    render(){
        console.log('Render called', this.state.count);
        return (
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleIncrement}>Incriment</button>
            </>
        )
    }
}

export default LifeCycle;