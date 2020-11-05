import React, { Component } from "react"

class InputTodo extends Component {
state = {
    title: ""
};

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