import postReducer from "./PostReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  postReducer,
});

export default rootReducer;
