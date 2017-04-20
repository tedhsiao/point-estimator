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
  return function(dispatch) {
    dispatch(requestCreateRoom());
    return axios
      .post("createRoom", payload.formInput)
      .then(function(response) {
        dispatch(createSuccess(response.data));
      })
      .catch(function(response) {
        dispatch(createError(response.data));
      });
  };
}
