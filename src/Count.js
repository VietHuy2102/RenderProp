import React from "react";

class Count extends React.Component{
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
                {this.props.render({
                    count:this.state.Count,
                    augment:this.augment,
                    reduce:this.reduce
                })}
            </>
        )
    }
}
export default Count