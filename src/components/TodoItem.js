import React from "react"

class TodoItem extends React.Component {
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#d35e0f",
            opacity: 0.4,
            textDecoration: "line-through",
        } //completedStyle object

        const { completed, id, title} = this.props.todo //destructuring the this.props.todo (i.e., pulling variables out of the todo)

        return( 
        <li className="todo-item">
            <input 
                type="checkbox"
                checked={completed}
                onChange={() => this.props.handleChange(id)} //onChange handler calls the handleChange method in TodoContainer and passes todo id.
            /> 
            <button onClick={() => this.props.deleteTodoProps(id)}> 
                Delete
            </button> 
            <span style={completed ? completedStyle : null}>{title}</span>
        </li>
        ) //return method
    } //render method
} //TodoItem

export default TodoItem