import * as actionTypes from "../actions/actionTypes";

const initialState = {
  notes: [],
  error: false,
  note: null,
  isLoading: false,
};

const noteReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_NOTES:
      return {
        ...state,
        notes: action.notes,
        isLoading: false,
        error: false,
      };
    case actionTypes.GET_NOTES_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_NOTE_BY_ID:
      return {
        ...state,
        noteDetails: action.noteDetails,
        error: false
      };
    case actionTypes.NOTES_FAILED:
      return {
        ...state,
        error: true,
        isLoading: false,
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
    case actionTypes.DELETE_NOTE:
      return {
        ...state,
        error: false
      };

    default:
      return state;
  }
};

export default noteReducer;