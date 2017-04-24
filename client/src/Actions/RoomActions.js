import axios from "axios";
import { history } from "../index";

export const CREATE_ROOM_REQ = "CREATE_ROOM_REQ";
export const CREATE_ROOM_SUCCESS = "CREATE_ROOM_SUCCESS";
export const CREATE_ROOM_ERR = "CREATE_ROOM_ERR";
export const GET_ROOM_REQ = "GET_ROOM_REQ";
export const GET_ROOM_SUCCESS = "GET_ROOM_SUCCESS";
export const GET_ROOM_ERR = "GET_ROOM_ERR";

function createRoomRequest() {
  return { type: CREATE_ROOM_REQ };
}

function createSuccess(json) {
  return {
    type: CREATE_ROOM_SUCCESS,
    data: json
  };
}

function createError(json) {
  return {
    type: CREATE_ROOM_ERR,
    data: json
  };
}

function getRoomRequest() {
  return { type: GET_ROOM_REQ };
}

function getSuccess(json) {
  return {
    type: GET_ROOM_SUCCESS,
    data: json
  };
}

function getError(json) {
  return {
    type: GET_ROOM_ERR,
    data: json
  };
}

export function getRoomInfo(payload) {
  return dispatch => {
    dispatch(getRoomRequest());
    return axios
      .get("/api/room/" + payload)
      .then(res => {
        dispatch(getSuccess(res.data));
      })
      .catch(res => {
        dispatch(getError(res.data));
      });
  };
}

export function createRoom(url, payload) {
  let requestPayload = {
    question: payload.questionString,
    choice1: payload.choice_1,
    choice2: payload.choice_2,
    choice3: payload.choice_3,
    choice4: payload.choice_4
  };
  return function(dispatch) {
    dispatch(createRoomRequest());
    return axios
      .post(url, requestPayload)
      .then(function(response) {
        dispatch(createSuccess(response.data));
        history.push("/room/" + response.data.id);
      })
      .catch(function(response) {
        dispatch(createError(response.data));
      });
  };
}
