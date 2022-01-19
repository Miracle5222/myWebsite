import counter from "./counter";
import darkMode from "./darkMode";
import { combineReducers } from "redux";



const reducers = combineReducers({
    counter,
    darkMode
})

export default reducers;