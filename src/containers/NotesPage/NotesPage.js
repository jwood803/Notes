import React, {Component, Fragment} from "react";
import Note from "../../components/Note/Note";
import AddNote from "../../components/AddNote/AddNote";
import {Grid, Row, Col, Button} from "react-bootstrap";
import "./NotesPage.css";
import {NoteDetails} from "../../components/NoteDetails/NoteDetails";

export class NotesPage extends Component {
  componentWillUpdate() {
    console.log("NotesPage WillUpdate")
  }

  state = {
    notes: [
      {id: 1, title: "Peak", details: "Great book!", rating: 5},
      {id: 2, title: "Code Complete", details: "Good pro`gramming resource."}
    ],
    showAddNoteModal: false
  };

  addNewNote = (note) => {
    const notes = this.state.notes.slice();

    notes.push(note);

    this.setState({notes: notes});

    this.hideModal();
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
      notes = notes.map((note, idx) => {
        return (
          <Col className="card" xs={3} key={idx}>
            <Note key={idx} note={note} />
          </Col>)
      })
    }

    return (
      <Fragment>
        <Button style={{marginBottom: "20px"}} bsStyle="primary" onClick={this.showModal}>Add note</Button>
        <AddNote showModal={this.state.showAddNoteModal} closeModal={this.hideModal} addNote={this.addNewNote}/>
        <Grid>
          <Row className="show-grid">
            {notes}
          </Row>
        </Grid>
        <NoteDetails />
      </Fragment>
    );
  }
}
