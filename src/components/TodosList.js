import React from "react"
import TodoItem from "./TodoItem"

class TodosList extends React.Component { //creates a component called TodosList 
    render() {
        return (
            <div>
               {this.props.todos.map(todo => ( //how can we access the todos properties without importing the TodoContainer?
                   <TodoItem 
                        key={todo.id}
                        todo={todo}
                        handleChangeProps={this.props.handleChangeProps}
                    />
               ))}
            </div>
        )
    }
} 

export default TodosList