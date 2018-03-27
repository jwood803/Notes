import React, {Component} from "react";
import PropTypes from "prop-types";
import {isBlank} from "../../utils/utils";
import {withRouter} from "react-router-dom";

class Note extends Component {
  articleClick = id => {
    this.props.history.push(`notes/${id}`);
  };

  render() {
    const note = this.props.note;
    let rating = <p>No rating</p>;

    if(!isBlank(note.rating)) {
      rating = <p>Has a rating of {note.rating}</p>
    }

    return (
      <article onClick={() => this.articleClick(note.id)}>
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

export default withRouter(Note);