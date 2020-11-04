import React from "react"
import TodoItem from "./TodoItem" //we expect to call this in this component at some point

class TodosList extends React.Component { //creates a component called TodosList 
    render() {
        return (
            <div>
               {this.props.todos.map(todo => ( //how can we access the todos properties without importing the TodoContainer?
                   <TodoItem 
                        key={todo.id}
                        todo={todo}
                        handleChange={this.props.handleChange}
                        deleteTodoProps={this.props.deleteTodoProps}
                    />
               ))}
            </div>
        )
    }
} 

export default TodosList