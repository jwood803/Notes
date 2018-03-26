import React, {Component} from "react";
import PropTypes from "prop-types";
import {isBlank} from "../../utils/utils";

class Note extends Component {
  openNote = id => {
    console.log(`open note id ${id}`);
  };

  render() {
    const note = this.props.note;
    let rating = <p>No rating</p>;

    if(!isBlank(this.props.rating)) {
      rating = <p>Has a rating of {this.props.rating}</p>
    }

    return (
      <article onClick={() => this.openNote(note.id)}>
        <h2>{note.title}</h2>
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