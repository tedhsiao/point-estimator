import {
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_ERR,
  CREATE_ROOM_REQ,
  GET_ROOM_REQ,
  GET_ROOM_SUCCESS,
  GET_ROOM_ERR
} from "../Actions/RoomActions";

const initialState = {
  isLoading: false,
  qustion: null,
  choices: null,
  id: null,
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
        question: action.data.question,
        choices: action.data.choices,
        roomId: action.data.id
      });
    case CREATE_ROOM_ERR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true
      });
    case GET_ROOM_REQ:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case GET_ROOM_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        question: action.data.question,
        choices: action.data.choices,
        roomId: action.data.id
      });
    case GET_ROOM_ERR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true
      });
    default:
      return state;
  }
}
