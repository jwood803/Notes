import {
  AUTHENTICATION_START,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_ERROR
} from "./actionTypes";
import axios from "axios";

const BASE_URL = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=[API_KEY]";

const authenticationStart = () => {
  return {
    type: AUTHENTICATION_START
  }
};

const getAuthentication = authDetails => {
  return {
    type: AUTHENTICATION_SUCCESS,
    authDetails,
  }
};

const authenticationFailed = () => {
  return {
    type: AUTHENTICATION_ERROR
  }
};

export const authenticationSuccess = (username, email) => {
  return dispatch => {
    dispatch(authenticationStart());

    axios.get("")
      .then(response => dispatch(getAuthentication(response.data)))
      .then(error => dispatch(authenticationFailed(error)));
  }
};