import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import axios from "axios"


class TodoContainer extends React.Component {
    state = {
        todos: [],
        show: false
    }

    /** Lifecycle methods */
    /* Get 10 todo items from JSON placeholder when component mounts. */
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            //Save items to todos state
            .then(response => this.setState({ todos: response.data }));
    }

    /** Callback functions */
    /* InputTodo form change handler */
    handleChange = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed; //inverting the value of todo.completed if conditional statement is true.
                }
                return todo;
            }),
            show: !this.state.show, //inverts the current value of the show property
        });
    };

    /* Delete todo item */
    delTodo = (id) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response =>
                this.setState({
                    //set state with all todos that do not equal the todo id being deleted                    
                    todos: [
                        ...this.state.todos.filter(todo => {
                            return todo.id !== id
                        }),
                    ],
                })
            )
    };

    /* Add todo item */
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

    render() {
        
        console.log(this.state.todos);
        
        //Props object
        const foo = {
            todos: this.state.todos,
            handleChange: this.handleChange,
            deleteTodoProps: this.delTodo


        };
        return (
            <div className="container">
                <Header headerSpan={this.state.show} />
                <InputTodo addTodoItem={this.addTodoItem} />
                <TodosList {...foo} />
            </div>
        );
    };
};

export default TodoContainer