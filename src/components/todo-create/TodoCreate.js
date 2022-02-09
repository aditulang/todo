import './TodoCreate.css'
import { useState } from "react";

const TodoCreate = (props) => {
    const [getInputTodo ,setInputTodo] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()

        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: 'Learn react'
        }

        props.onCreateTodo(newTodo)


        //console.log(newTodo) 
    }
    return (
       <form className="todo-form" onSubmit={handleSubmit}>
           <input type="text" />
           <button type="submit">Add</button>
       </form>
    )
}

export default TodoCreate;