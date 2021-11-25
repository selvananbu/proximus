import { combineReducers } from "redux";
import deviceReducer from "./deviceReducers";

const allReducers = combineReducers({
    deviceReducer: deviceReducer,
});

export default allReducers;
