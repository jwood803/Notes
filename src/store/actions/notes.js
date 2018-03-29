import {GET_NOTES, GET_NOTES_FAILED} from "./actionTypes";
import axios from "../../utils/axios-notes";

export const setNotes = notes => {
  return {
    type: GET_NOTES,
    notes: notes
  }
};

export const getNotes = () => {
  return dispatch => {
    axios.get("/notes.json")
      .then(response => {
        let values = Object.values(response.data);
        let keys = Object.keys(response.data);

        keys.forEach((key, idx) => {
          values[idx] = {
            ...values[idx],
            id: key
          }
        });

        dispatch(setNotes(values));
      })
      .catch(() => {
        dispatch(getNotesFailed());
      });
  }
};

export const getNotesFailed = () => {
  return {
    type: GET_NOTES_FAILED
  }
};