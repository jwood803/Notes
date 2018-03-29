import * as actionTypes from "../actions/actionTypes";

const initialState = {
  notes: []
};

const noteReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_NOTES:
      return {
        ...state,
        notes: state.notes.concat(action.notes)
      };

    default:
      return state;
  }
};

export default noteReducer;