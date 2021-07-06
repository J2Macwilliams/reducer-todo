import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.task.map(item => (
                <Todo
                    key={item.id}
                    todo={item}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}

        </div>
    )
}

export default TodoList