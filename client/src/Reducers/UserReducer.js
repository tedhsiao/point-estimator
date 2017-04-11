const REQ_DATA = "REQ_DATA";
const RECV_DATA = "RECV_DATA";
const RECV_ERROR = "RECV_ERROR";

const initialState = {
  isLoading: false,
  data: [],
  error: false
};

export default function userReducer(state = initialState, action = null) {
  switch (action.type) {
    case RECV_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data,
        error: true
      });
    case RECV_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data,
        error: false
      });
    case REQ_DATA:
      return Object.assign({}, state, { isLoading: true, error: false });
    default:
      return state;
  }
}
