import { combineReducers } from "redux";
import usersReducers from './reducer'


const rootReducer = combineReducers({
    usersReducers: usersReducers
})

export default rootReducer;