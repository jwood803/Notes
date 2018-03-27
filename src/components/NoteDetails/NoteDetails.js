import React, {Component, Fragment} from "react";
import axios from "../../utils/axios-notes";
import Spinner from "../../UI/Spinner/Spinner";
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

      setTimeout(() => console.log("Timout"), 500);

      this.hideModal();

      this.props.history.push("/");
    }
  };

  goToEditPage = () => {
    this.props.history.push(`${this.props.match.params.id}/edit`);
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
            <Button onClick={this.goToEditPage}>
              Edit
            </Button>
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