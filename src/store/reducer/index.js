let initialState = {
    count: 0
}

export const setCounter = (state = initialState, action) => {  
    switch (action.type) {  
        case 'INCREASE':  
            return {count: state.count + 1};  
        case 'DECREASE':  
            return {count: state.count - 1}  
        default:  
            return state;  
    }  
} 

export const addCounter = (state = initialState, action) => {  
    switch (action.type) {  
        case 'INCREASEON':  
            return {count: state.count + 10};  
        case 'DECREASEOFF':  
            return {count: state.count - 10}  
        default:  
            return state;  
    }  
}
