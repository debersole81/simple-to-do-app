import React from "react"
import TodosList from "./TodosList"

class TodoContainer extends React.Component { //defines a React component class called TodoContainer and extends the Component class in the React library 
state = { //state object that holds the todos data. todos is the prop
    todos: [
        {
            id: 1,
            title: "Setup development environment",
            completed: true
        },
        {
            id: 2,
            title: "Develop website and add content",
            completed: false            
        },
        {
            id: 3,
            title: "Deploy to live server",
            completed: false
        }
    ]          
    }
    render() { //render method returns JSX. will not work without importing the React object from the react module
        return(
            <div>
                <TodosList todos={this.state.todos} />
            </div>
        )
    }
}

export default TodoContainer