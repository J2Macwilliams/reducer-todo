import React, { useState , useReducer} from 'react';
import { initialState , reducer } from '../reducers/todo';

const TodoList = () => {
    const [newTodo, setNewToDo] = useState();

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Get it Done!</h1>
        </div>
    )
}

export default TodoList
