import React, {Component, Fragment} from "react";
import axios from "../../utils/axios-notes";
import Spinner from "../../UI/Spinner/Spinner";
import {Link} from "react-router-dom";
import DeleteNote from "../Modals/DeleteNote/DeleteNote";
import {Button} from "react-bootstrap";

export class NoteDetails extends Component {
  state = {
    note: null,
    isLoading: false,
    showDeleteNoteModal: false,
    id: null
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

  showModal = () => {
    this.setState({showDeleteNoteModal: true, id: this.props.match.params.id});
  };

  hideModal = () => {
    this.setState({showDeleteNoteModal: false});
  };

  deleteNote = (id) => {
    if(id) {
      this.setState({isLoading: true});

      axios.delete(`/notes/${id}.json`)
        .then(response => {
          console.log(response);
          this.setState({isLoading: false});
        })
        .catch(_ => this.setState({isLoading: false}));

      this.hideModal();

      this.props.history.push("/");
    }
  };

  render() {
    let noteDetails = <p className="pull-down">No note found.</p>;
    let page = <Spinner />;

    if(this.state.note) {
      noteDetails = (
        <section className="pull-down">
          <DeleteNote
            showModal={this.state.showDeleteNoteModal}
            closeModal={this.hideModal}
            deleteNote={this.deleteNote}
            title={this.state.note.title}
            id={this.props.match.params.id}
          />
          <div style={{textAlign: "center"}}>
            <Link style={{marginRight: "10px"}} to={`${this.props.match.params.id}/edit`}>
              Edit
            </Link>
            <Button onClick={this.showModal}>
              Delete
            </Button>
          </div>
          <h1>{this.state.note.title}</h1>
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