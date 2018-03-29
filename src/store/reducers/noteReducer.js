import * as actionTypes from "../actions/actionTypes";

const initialState = {
  notes: [],
  error: false
};

const noteReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_NOTES:
      return {
        ...state,
        notes: action.notes,
        error: false
      };
    case actionTypes.GET_NOTES_FAILED:
      return {
        ...state,
        error: true
      };

    default:
      return state;
  }
};

export default noteReducer;