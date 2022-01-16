import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
// TODO: add reducers
    UserData:UserReducer,
})

export default rootReducer;