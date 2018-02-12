import { createStore } from 'redux'
import { combineReducers } from "redux";
import {setCounter,addCounter} from "./reducer"
// import * as reducers from "./reducer"

const rootReducer = combineReducers({
    setCounter,
    addCounter
});

const store = createStore(rootReducer)

export default store