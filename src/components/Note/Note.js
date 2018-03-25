import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {isBlank} from "../../utils/utils";

class Note extends Component {
  render() {
    let rating = null;

    if(!isBlank(this.props.rating)) {
      rating = <p>Has a rating of {this.props.rating}</p>
    }

    return (
      <Fragment>
        <h2>{this.props.title}</h2>
        {rating}
        <p>{this.props.details}</p>
      </Fragment>
    );
  }
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default Note;