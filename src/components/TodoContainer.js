import React from "react" //this is just for the component that we are going to extend
import TodosList from "./TodosList" //do you import from child to parent? this doesn't make sense.
import Header from "./Header"

class TodoContainer extends React.Component { //defines a React component class called TodoContainer and extends the Component class in the React library. 
state = {
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
    
    handleChange = () => { //this prop is passed down two levels to TodoItem
        console.log("clicked");
    };

    render() { //render method returns JSX. will not work without importing the React object from the react module
        const foo = {
            todos: this.state.todos,
            handleChange: this.handleChange
        };
        return(
            <div>
                <Header />
                <TodosList {...foo} /> 
            </div>
        );//return
    };//render
};//class

export default TodoContainer