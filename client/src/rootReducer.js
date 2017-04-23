import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import userReducer from "./Reducers/UserReducer";
import roomReducer from "./Reducers/RoomReducer";

const rootReducer = combineReducers({
  router: routerReducer,
  user: userReducer,
  room: roomReducer
});

export default rootReducer;
