import React, {Component} from "react";
import PropTypes from "prop-types";
import {isBlank} from "../../utils/utils";
import {Link} from "react-router-dom";

class Note extends Component {
  render() {
    const note = this.props.note;
    let rating = <p>No rating</p>;

    if(!isBlank(note.rating)) {
      rating = <p>Has a rating of {note.rating}</p>
    }

    return (
      <Link to={`/notes/${note.id}`}>
        <article>
          <h3>{note.title}</h3>
          {rating}
          <p>{note.details}</p>
        </article>
      </Link>
    );
  }
}

Note.propTypes = {
  note: PropTypes.object.isRequired
};

export default Note;