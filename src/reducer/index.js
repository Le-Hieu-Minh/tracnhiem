import { combineReducers } from "redux";
import loginReducer from "./Login";
const allReducer = combineReducers({
  loginReducer,
});

export default allReducer;
