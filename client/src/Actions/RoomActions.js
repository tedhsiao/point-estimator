import axios from "axios";

export const CREATE_ROOM_REQ = "CREATE_ROOM_REQ";
export const CREATE_ROOM_SUCCESS = "CREATE_ROOM_SUCCESS";
export const CREATE_ROOM_ERR = "CREATE_ROOM_ERR";

function requestCreateRoom() {
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

export function createRoom(url, payload) {
  let requestPayload = {
    question: payload.questionString,
    choice1: payload.choice_1,
    choice2: payload.choice_2,
    choice3: payload.choice_3,
    choice4: payload.choice_4
  };
  return function(dispatch) {
    dispatch(requestCreateRoom());
    return axios
      .post(url, requestPayload)
      .then(function(response) {
        dispatch(createSuccess(response.data));
      })
      .catch(function(response) {
        dispatch(createError(response.data));
      });
  };
}
