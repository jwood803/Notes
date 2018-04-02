import {
  AUTHENTICATION_START,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_ERROR
} from "./actionTypes";
import axios from "axios";

const API_KEY = "AIzaSyBhJE8p883RwdujD_JmGhIcT8EiuAeuFbE";
let BASE_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`;

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

const authenticationFailed = error => {
  return {
    type: AUTHENTICATION_ERROR,
    error
  }
};

export const authenticationSuccess = (username, password, isSignUp) => {
  return dispatch => {
    dispatch(authenticationStart());

    const userInfo = {
      email: username,
      password,
      returnSecureToken: true
    };

    if(!isSignUp) {
      BASE_URL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`
    }

    axios.post(BASE_URL, userInfo)
      .then(response => {
        dispatch(getAuthentication(response.data));

        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);

        dispatch(authenticationFailed(error))
      });
  }
};