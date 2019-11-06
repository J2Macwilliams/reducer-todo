import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/todoReducer';
import TodoList from './TodoList';

import './Todo.css'

const TodoForm = () => {
    const [newTodo, setNewToDo] = useState('');

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = event => {
        setNewToDo(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();

        dispatch({ type: "MAKE_TODO", payload: { item: newTodo, completed: false, id: Date.now() } })
        setNewToDo("");
    }

    const toggleToDo = (id) => {
        dispatch({ type: "BYEBYE", payload: id })
    }

    const goAway = () => {
        dispatch({ type: "GONE" })
    }
    
    return (
        <div >
            <h1>Get it Done!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="todo"
                    id="todo"
                    value={newTodo}
                    placeholder={state.item}
                    onChange={handleChange}
                />
                <button type="submit" >submit</button>
                <button onClick={goAway}>clear completed</button>

            </form>
            <TodoList task={state} toggleCompleted={toggleToDo} />
        </div>
    )
}

export default TodoForm
