import {
  GET_NOTES,
  GET_NOTE_BY_ID,
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

const deleteNoteById = () => {
  return {
    type: DELETE_NOTE
  }
};

const getNoteFromId = noteDetails => {
  return {
    type: GET_NOTE_BY_ID,
    noteDetails
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

export const deleteNote = id => {
  return dispatch => {
    axios.delete(`/notes/${id}.json`)
      .then(() => dispatch(deleteNoteById(id)))
      .catch(() => dispatch(notesFailed()));
  }
};

export const getNoteById = id => {
  return dispatch => {
    axios.get(`/notes/${id}.json`)
      .then(response => dispatch(getNoteFromId(response.data)))
      .catch(() => dispatch(notesFailed()));
  }
};

export const notesFailed = () => {
  return {
    type: NOTES_FAILED
  }
};