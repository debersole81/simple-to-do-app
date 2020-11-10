import React from "react"

class TodoItem extends React.Component {
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#d35e0f",
            opacity: 0.4,
            textDecoration: "line-through",

        }

        return <li className="todo-item">
            <input 
                type="checkbox"
                checked={this.props.todo.completed}
                onChange={() => this.props.handleChange(this.props.todo.id)} //onChange handler calls the handleChange method in TodoContainer and passes todo id.
            /> 
            <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}> 
                Delete
            </button> 
            {this.props.todo.title}
            </li>
    }
}

export default TodoItem