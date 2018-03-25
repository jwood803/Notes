import React, {Component, Fragment} from "react";
import Note from "../../components/Note/Note";
import AddNote from "../../components/AddNote/AddNote";
import {Button} from "react-bootstrap";

class NotesPage extends Component {
  state = {
    notes: [
      {title: "Peak", details: "Great book!", rating: 5},
      {title: "Code Complete", details: "Good programming resource."}
    ],
    showAddNoteModal: false
  };

  addNewNote = (note) => {
    const notes = this.state.notes.slice();

    notes.push(note);

    this.setState({notes: notes});
  };

  showModal = () => {
    this.setState({
      showAddNoteModal: true
    });
  };

  hideModal = () => {
    this.setState({
      showAddNoteModal: false
    });
  };

  render() {
    let notes = this.state.notes.slice();

    if(notes.length === 0) {
      notes = <p>Start adding notes!</p>
    }
    else {
      notes = notes.map((note, idx) => <Note key={idx} title={note.title} details={note.details} rating={note.rating}/>)
    }

    return (
      <Fragment>
        <Button bsStyle="primary" onClick={this.showModal}>Add note</Button>
        <AddNote showModal={this.state.showAddNoteModal} closeModal={this.hideModal} />
        {notes}
      </Fragment>
    );
  }
}

export default NotesPage;