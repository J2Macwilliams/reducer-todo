export const initialState = {
    item: '',
    completed: false,
    id: Date.now()
}

export function reducer(state, action) {
    switch (action.type) {
        case "Update_TODO" :
            return {
                ...state,
                todoItem: action.payload
            };

        default:
            return state;
    }
}