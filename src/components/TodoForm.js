import React, { useState , useReducer} from 'react';
import { initialState , reducer } from '../reducers/todoReducer';

import './Todo.css'

const TodoList = () => {
    const [newTodo, setNewToDo] = useState('');

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = event => {
        setNewToDo(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault();
        setNewToDo("");

        dispatch({ type: "Update_TODO" , payload: newTodo || state.item })
    }
    const todoList = () => {
        dispatch({ type: "SET_LIST" , payload: state.item })
    }
    return (
        <div >
            <h1>Get it Done!</h1>
            <form onSubmit={handleSubmit}>
                <input 
                name = "todo"
                id = "todo"
                placeholder = {state.item}
                onChange={handleChange}
                />
                <button onClick={todoList}>submit</button>
                <button>clear completed</button>
            </form>
            <h2 className= "output">{state.list}</h2>
        </div>
    )
}

export default TodoList
