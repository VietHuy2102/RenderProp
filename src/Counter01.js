import React from "react";

class Counter01 extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            Count: 0
        }

    }

    augment = () =>{
        this.setState({
            Count: this.state.Count +1
        })
    }
    reduce = () =>{
        this.setState({
            Count: this.state.Count -1
        })
    }

    render() {
        return(
            <>
                <h1>Count: {this.state.Count}</h1>
                <button onClick={this.augment}>+</button>
                <button onClick={this.reduce}>-</button>
            </>
        )
    }
}
export default Counter01