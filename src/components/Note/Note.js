import React, {Component} from "react";
import PropTypes from "prop-types";
import {isBlank} from "../../utils/utils";
import axios from "../../utils/axios-notes";

class Note extends Component {
  openNote = id => {
    console.log(`open note id ${id}`);

    axios.get(`/notes/${id}.json`)
      .then(response => console.log(response.data));
  };

  render() {
    const note = this.props.note;
    let rating = <p>No rating</p>;

    if(!isBlank(this.props.rating)) {
      rating = <p>Has a rating of {this.props.rating}</p>
    }

    return (
      <article onClick={() => this.openNote(note.id)}>
        <h3>{note.title}</h3>
        {rating}
        <p>{note.details}</p>
      </article>
    );
  }
}

Note.propTypes = {
  note: PropTypes.object.isRequired
};

export default Note;