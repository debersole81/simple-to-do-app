import React, { Component } from "react"

class InputTodo extends Component {
state = {
    title: ""
};

onChange = (e) => { //event handler for onChange prop in the input tag, triggered by any value placed in the onChange input field.
    this.setState({
        [e.target.name]: e.target.value
    }); //setState
}; //onChange method (part of class)

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    placeholder="Add Todo..." 
                    value={this.state.title}
                    name="title" //why isn't this {this.state.title}?
                    onChange={this.onChange}
                /> 
                <input type="submit" value="Submit" />
            </form>
        )
    }          
}

export default InputTodo