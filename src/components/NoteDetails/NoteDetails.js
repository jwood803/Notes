import React, {Component, Fragment} from "react";
import Spinner from "../../UI/Spinner/Spinner";
import DeleteNote from "../Modals/DeleteNote/DeleteNote";
import {Button} from "react-bootstrap";
import {EditNote} from "../Modals/EditNote/EditNote";
import {deleteNote, editNote, getNoteById} from "../../store/actions/notesAction";
import {connect} from "react-redux";

class NoteDetails extends Component {
  state = {
    showDeleteNoteModal: false,
    showEditNoteModal: false,
    id: null
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.onGetNoteDetails(id);
  }

  showDeleteModal = () => {
    this.setState({showDeleteNoteModal: true, id: this.props.match.params.id});
  };

  hideModal = () => {
    this.setState({showDeleteNoteModal: false, showEditNoteModal: false});
  };

  deleteNote = (id) => {
    if (id) {
      this.props.onDeleteNote(id);

      this.hideModal();

      this.props.history.push("/");
    }
  };

  showEditModal = () => {
    this.setState({showEditNoteModal: true});
  };

  updateNote = updatedNote => {
    const id = this.state.id;

    this.props.onEditNote(id, updatedNote);

    this.hideModal();
  };

  render() {
    let noteDetails = <p className="pull-down">No note found.</p>;
    let page = <Spinner/>;

    if (this.props.note) {
      noteDetails = (
        <section className="pull-down">
          <DeleteNote
            showModal={this.state.showDeleteNoteModal}
            closeModal={this.hideModal}
            deleteNote={this.deleteNote}
            title={this.props.note.title}
            id={this.props.match.params.id}
          />
          <EditNote
            showModal={this.state.showEditNoteModal}
            closeModal={this.hideModal}
            updateNote={this.updateNote}
            note={this.props.note}
          />
          <div style={{textAlign: "center"}}>
            <Button onClick={this.showEditModal}>Edit</Button>
            <Button onClick={this.showDeleteModal}>Delete</Button>
          </div>
          <h1>{this.props.note.title}</h1>
          <p>{this.props.note.details}</p>
          <p>{this.props.note.rating}</p>
        </section>
      );
    }

    if (!this.props.isLoading) {
      page = noteDetails;
    }

    return (
      <Fragment>
        {page}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    note: state.notes.noteDetails,
    isLoading: state.notes.isLoading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onEditNote: (id, note) => dispatch(editNote(id, note)),
    onDeleteNote: id => dispatch(deleteNote(id)),
    onGetNoteDetails: id => dispatch(getNoteById(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetails)