import {
  AUTHENTICATION_START,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_ERROR
} from "../actions/actionTypes";

const initialState = {
  error: null,
  isLoading: false,
  token: null,
  userId: null,
};

const authenticationReducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTHENTICATION_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        token: action.token,
        userId: action.userId
      };
    case AUTHENTICATION_ERROR:
      return {
        error: action.error
      };
    default:
      return state;
  }
};

export default authenticationReducer;