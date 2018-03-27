import React, {Component, Fragment} from "react";
import axios from "../../utils/axios-notes";
import Spinner from "../../UI/Spinner/Spinner";
import {Link} from "react-router-dom";

export class NoteDetails extends Component {
  state = {
    note: null,
    isLoading: false
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    this.setState({isLoading: true});

    axios.get(`/notes/${id}.json`)
      .then(response => this.setState({note: response.data, isLoading: false}))
      .catch(response => {
        console.log(response);
        this.setState({isLoading: false})
      });
  }

  render() {
    let noteDetails = <p className="pull-down">No note found.</p>;
    let page = <Spinner />;

    if(this.state.note) {
      noteDetails = (
        <section className="pull-down">
          <h1>{this.state.note.title}</h1>
          <span>
            <Link to={`${this.props.match.params.id}/edit`}>
              Edit
            </Link>
          </span>
          <p>{this.state.note.details}</p>
          <p>{this.state.note.rating}</p>
        </section>
      );
    }

    if(!this.state.isLoading) {
      page = noteDetails;
    }

    return (
      <Fragment>
        {page}
      </Fragment>
    );
  }
}