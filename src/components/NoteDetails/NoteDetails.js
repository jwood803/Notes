import React, {Component, Fragment} from "react";
import axios from "../../utils/axios-notes";

export class NoteDetails extends Component {
  state = {
    note: null
  };

  componentDidMount() {
    const id = this.props.match.params["id"];

    axios.get(`/notes/${id}.json`)
      .then(response => this.setState({note: response.data}))
      .catch(response => console.log(response));
  }

  render() {
    let noteDetails = <p style={{marginTop: "65px"}}>No note found.</p>;

    if(this.state.note) {
      noteDetails = (
        <section style={{marginTop: "65px"}}>
          <h3>{this.state.note.title}</h3>
          <p>{this.state.note.details}</p>
          <p>{this.state.note.rating}</p>
        </section>
      );
    }

    return (
      <Fragment>
        {noteDetails}
      </Fragment>
    );
  }
}