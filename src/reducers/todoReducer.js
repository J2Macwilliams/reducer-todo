export const initialState = [{
    item: '',
    completed: false,
    id: Date.now()
}]



export function reducer(state, action) {
    switch (action.type) {

        case "MAKE_TODO":
            return [
                ...state,
                action.payload,
            ]
                ;
        case "COMPLETE_TODO":
            return (
                state.map(todo => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed }
                    } else {
                        return todo;
                    }
                }

                )
            )
        case "REMOVE_TODO":
            return (
                state.filter(
                    todo => {
                        return !todo.completed
                    }
                )
            )




        default:
            return state;
    }
} 