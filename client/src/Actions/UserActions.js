import axios from "axios";

const REQ_DATA = "REQ_DATA";
const RECV_DATA = "RECV_DATA";
const RECV_ERROR = "RECV_ERROR";

function requestData() {
  return { type: REQ_DATA };
}

function receiveData(json) {
  return {
    type: RECV_DATA,
    data: json
  };
}

function receiveError(json) {
  return {
    type: RECV_ERROR,
    data: json
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
