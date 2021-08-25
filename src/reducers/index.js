import { combineReducers } from "redux";
import postReducer from "./posts";
import auth from './auth'
export default combineReducers({
    posts: postReducer,
    auth
})