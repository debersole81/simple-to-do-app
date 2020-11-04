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
    
    handleChange = (id) => { //this method is passed down two levels to TodoItem via props in the render syntax. accepts todo id as an argument and logs it in the console when checkbox is clicked.
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
            } //conditional statement
            return todo; //returns as a boolean value
            }) //array map
        }); //setState method
    }; //handleChange method

    render() { //render method returns JSX. will not work without importing the React object from the react module
        const foo = { //defines props that will be passed to TodosList
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