import {
  GET_NOTES,
  NOTES_FAILED,
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE
} from "./actionTypes";
import axios from "../../utils/axios-notes";

const setNotes = notes => {
  return {
    type: GET_NOTES,
    notes: notes
  }
};

const setNewNote = newNote => {
  return {
    type: ADD_NOTE,
    newNote
  }
};

const updateNote = () => {
  return {
    type: EDIT_NOTE
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
        dispatch(notesFailed());
      });
  }
};

export const addNote = note => {
  return dispatch => {
    axios.post("/notes.json", note)
      .then(() => dispatch(setNewNote(note)))
      .catch(() => dispatch(notesFailed()));
  }
};

export const editNote = (id, note) => {
  return dispatch => {
    axios.put(`/notes/${id}.json`, note)
      .then(() => dispatch(updateNote()))
      .catch(() => dispatch(notesFailed()));
  }
};

export const notesFailed = () => {
  return {
    type: NOTES_FAILED
  }
};