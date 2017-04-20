import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import userReducer from "./Reducers/UserReducer";

const rootReducer = combineReducers({
  router: routerReducer,
  user: userReducer
});

export default rootReducer;
