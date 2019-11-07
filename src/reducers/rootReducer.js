import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import signInReducer from "./signInReducer";
import skinningReducer from "./skinningReducer";

export default combineReducers({
  simpleReducer,
  skinningReducer,
  signInReducer
});
