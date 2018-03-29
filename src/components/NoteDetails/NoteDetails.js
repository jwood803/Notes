import React, {Component, Fragment} from "react";
import axios from "../../utils/axios-notes";
import Spinner from "../../UI/Spinner/Spinner";
import DeleteNote from "../Modals/DeleteNote/DeleteNote";
import {Button} from "react-bootstrap";
import {EditNote} from "../Modals/EditNote/EditNote";
import {editNote} from "../../store/actions/notesAction";
import {connect} from "react-redux";

class NoteDetails extends Component {
  state = {
    note: null,
    isLoading: false,
    showDeleteNoteModal: false,
    showEditNoteModal: false,
    id: null
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    this.setState({isLoading: true, id: id});

    axios.get(`/notes/${id}.json`)
      .then(response => this.setState({note: response.data, isLoading: false}))
      .catch(response => {
        console.log(response);
        this.setState({isLoading: false});
      });
  }

  showDeleteModal = () => {
    this.setState({showDeleteNoteModal: true, id: this.props.match.params.id});
  };

  hideModal = () => {
    this.setState({showDeleteNoteModal: false, showEditNoteModal: false});
  };

  deleteNote = (id) => {
    if (id) {
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

  showEditModal = () => {
    this.setState({showEditNoteModal: true});
  };

  updateNote = updatedNote => {
    const id = this.state.id;

    this.setState({isLoading: true});

    this.props.onEditNote(id, updatedNote);

    this.setState({isLoading: false});

    this.hideModal();
  };

  render() {
    let noteDetails = <p className="pull-down">No note found.</p>;
    let page = <Spinner/>;

    if (this.state.note) {
      noteDetails = (
        <section className="pull-down">
          <DeleteNote
            showModal={this.state.showDeleteNoteModal}
            closeModal={this.hideModal}
            deleteNote={this.deleteNote}
            title={this.state.note.title}
            id={this.props.match.params.id}
          />
          <EditNote
            showModal={this.state.showEditNoteModal}
            closeModal={this.hideModal}
            updateNote={this.updateNote}
            note={this.state.note}
          />
          <div style={{textAlign: "center"}}>
            <Button onClick={this.showEditModal}>Edit</Button>
            <Button onClick={this.showDeleteModal}>Delete</Button>
          </div>
          <h1>{this.state.note.title}</h1>
          <p>{this.state.note.details}</p>
          <p>{this.state.note.rating}</p>
        </section>
      );
    }

    if (!this.state.isLoading) {
      page = noteDetails;
    }

    return (
      <Fragment>
        {page}
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditNote: (id, note) => dispatch(editNote(id, note))
  }
};

export default connect(null, mapDispatchToProps)(NoteDetails)