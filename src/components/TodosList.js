import React from "react"

class TodosList extends React.Component { //creates a component called TodosList 
    render() {
        return (
            <div>
                {this.props.todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </div>
        )
    }
} 

export default TodosList