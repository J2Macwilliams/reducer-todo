export const initialState = {
    item: '',
    list: [],
    completed: false,
    id: Date.now()
}

export function reducer(state, action) {
    switch (action.type) {
        
        case "Update_TODO" :
            return {
                ...state,
                item: action.payload
            };
        case "SET_LIST" :
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        default:
            return state;
    }
} 