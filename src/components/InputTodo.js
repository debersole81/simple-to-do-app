import React, { Component } from "react"

class InputTodo extends Component {
state = {
    title: ""
};

onChange = (e) => { //event handler for onChange prop in the input tag
    this.setState({
        title: e.target.value
    }); //setState
}; //onChange method (part of class)

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    placeholder="Add Todo..." 
                    value={this.state.title}
                    onChange={this.onChange}
                /> 
                <input type="submit" value="Submit" />
            </form>
        )
    }          
}

export default InputTodo