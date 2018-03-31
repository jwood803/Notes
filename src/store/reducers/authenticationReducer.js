import {
  AUTHENTICATION_START,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_ERROR
} from "../actions/actionTypes";

const initialState = {
  error: null,
  isLoading: false,
};

const authenticationReducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTHENTICATION_START:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case AUTHENTICATION_SUCCESS:
      return {

      };
    case AUTHENTICATION_ERROR:
      return {

      };
    default:
      return state;
  }
};

export default authenticationReducer;