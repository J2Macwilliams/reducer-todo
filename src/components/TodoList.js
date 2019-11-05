import React, { useState , useReducer} from 'react';
import { initialState , reducer } from '../reducers/todo';

const TodoList = () => {
    const [newTodo, setNewToDo] = useState('');

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = event => {
        setNewToDo(event.target.value)
    }
    return (
        <div>
            <h1>Get it Done!</h1>
            <form>
                <input 
                name = "todo"
                id = "todo"
                placeholder = "add todo"
                onChange={handleChange}
                />
                <button>submit</button>
            </form>
        </div>
    )
}

export default TodoList
