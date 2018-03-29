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
    case actionTypes.NOTES_FAILED:
      return {
        ...state,
        error: true
      };
    case actionTypes.ADD_NOTE:
      return {
        ...state,
        newNote: action.newNote,
        error: false
      };
    case actionTypes.EDIT_NOTE:
      return {
        ...state,
        error: false
      };

    default:
      return state;
  }
};

export default noteReducer;