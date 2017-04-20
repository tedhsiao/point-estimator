import {
  SIGN_UP_SUCCESS,
  SIGN_UP_ERR,
  SIGN_UP_REQ,
  LOG_OUT
} from "../Actions/UserActions";

const initialState = {
  user: null,
  isLoading: false,
  data: [],
  error: false
};

export default function userReducer(state = initialState, action = null) {
  switch (action.type) {
    case LOG_OUT:
      return Object.assign({}, state, {
        user: null
      });
    case SIGN_UP_ERR:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data,
        error: true
      });
    case SIGN_UP_SUCCESS:
      return Object.assign({}, state, {
        user: action.data,
        isLoading: false,
        data: action.data,
        error: false
      });
    case SIGN_UP_REQ:
      return Object.assign({}, state, { isLoading: true, error: false });
    default:
      return state;
  }
}
