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
        case "ByeBye" :
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
          
           
           


        default:
            return state;
    }
} 