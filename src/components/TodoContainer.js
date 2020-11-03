import React from "react"
import TodosList from "./TodosList" //do you import from child to parent? this doesn't make sense.
import Header from "./Header"

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
    
    handleChange = () => {
        console.log("clicked");
    };

    render() { //render method returns JSX. will not work without importing the React object from the react module
        return(
            <div>
                <Header />
                <TodosList todos={this.state.todos} handleChange={this.handleChange} />
            </div>
        )
    }
}

export default TodoContainer