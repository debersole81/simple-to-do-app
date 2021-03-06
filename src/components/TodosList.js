import React from "react"
import TodoItem from "./TodoItem"

class TodosList extends React.Component {  
    render() {
        
        return (
            //map through todo props and pass to TodoItem component
            <div>
               {this.props.todos.map(todo => (
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