import React, {Component} from "react";

export class NoteDetails extends Component {
  render() {
    return (
      <section>
        <h3>{this.props.title}</h3>
        <p>{this.props.details}</p>
        <p>{this.props.rating}</p>
      </section>
    );
  }
}