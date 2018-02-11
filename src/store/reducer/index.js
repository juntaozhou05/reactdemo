export const addTodo = (state = 0,action) => {
    switch(action.type) {
        case action.type == "INCREASE":
            return state + 1
        case action.type == "DECREASE":
            return state - 1
        default:
            state
    }
}