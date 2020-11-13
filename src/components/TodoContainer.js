import React from "react" 
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import axios from "axios"


class TodoContainer extends React.Component { 
state = {
    todos:[],          
    }
    
    handleChange = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
            }
            return todo;
            })
        });
    };

    delTodo = (id) => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };

    addTodoItem = (title) => {
        axios
            .post("https://jsonplaceholder.typicode.com/todos", { //send the following data to URL
            title: title,
            completed: false, //new todo entry will not be checked by default
            })

            .then(response => //promise that is resolved with the .then method. appends received data to todos list via the setState method.
                this.setState({
                    todos: [...this.state.todos, (response.data)],
                            
            })
            ) 
        
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => this.setState({ todos: response.data }));
    }

    render() {
               
        const foo = {
            todos: this.state.todos,
            handleChange: this.handleChange,
            deleteTodoProps: this.delTodo
        

        };
        return(
            <div className="container">
                <Header />
                <InputTodo addTodoItem = {this.addTodoItem} />
                <TodosList {...foo} /> 
            </div>
        );
    };
};

export default TodoContainer