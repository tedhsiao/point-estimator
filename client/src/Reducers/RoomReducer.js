import {
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_ERR,
  CREATE_ROOM_REQ
} from "../Actions/RoomActions";

const initialState = {
  isLoading: false,
  data: null,
  error: false
};

export default function roomReducer(state = initialState, action = null) {
  switch (action.type) {
    case CREATE_ROOM_REQ:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case CREATE_ROOM_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data
      });
    case CREATE_ROOM_ERR:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data,
        error: true
      });
    default:
      return state;
  }
}
