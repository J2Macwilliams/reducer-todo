import React, { useState , useReducer} from 'react';
import { initialState , reducer } from '../reducers/todoReducer';

const TodoList = () => {
    const [newTodo, setNewToDo] = useState('');

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = event => {
        setNewToDo(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault();
        setNewToDo("");

        dispatch({ type: "Update_TODO" , payload: newTodo})
    }
    return (
        <div>
            <h1>Get it Done!</h1>
            <form onSubmit={handleSubmit}>
                <input 
                name = "todo"
                id = "todo"
                placeholder = {state.todoItem}
                onChange={handleChange}
                />
                <button>submit</button>
            </form>
            
        </div>
    )
}

export default TodoList
