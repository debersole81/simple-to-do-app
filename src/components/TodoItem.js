import React from "react"

class TodoItem extends React.Component {
    return() {
        return <li>{this.props.todo.title}</li>
    }
}

export default TodoItem