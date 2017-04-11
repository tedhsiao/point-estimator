import axios from "axios";

export const SIGN_UP_REQ = "SIGN_UP_REQ";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_ERR = "SIGN_UP_ERR";
export const LOG_OUT = "LOG_OUT";

function requestData() {
  return { type: SIGN_UP_REQ };
}

function receiveData(json) {
  return {
    type: SIGN_UP_SUCCESS,
    data: json
  };
}

function receiveError(json) {
  return {
    type: SIGN_UP_SUCCESS,
    data: json
  };
}

export function logout() {
  return {
    type: LOG_OUT
  };
}

export function fetchData(url, payload) {
  return function(dispatch) {
    dispatch(requestData());
    return axios
      .post(url, {
        name: payload.name,
        email: payload.email,
        googleId: payload.googleId
      })
      .then(function(response) {
        dispatch(receiveData(response.data));
      })
      .catch(function(response) {
        dispatch(receiveError(response.data));
      });
  };
}
