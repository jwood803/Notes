import React, {Component, Fragment} from "react";
import Note from "../../components/Note/Note";
import AddNote from "../../components/AddNote/AddNote";
import {Grid, Row, Col, Button} from "react-bootstrap";
import "./NotesPage.css";
import axios from "../../utils/axios-notes";
import Spinner from "../../UI/Spinner/Spinner";

export class NotesPage extends Component {
  componentDidMount() {
    this.setState({isLoading: true});

    axios.get("/notes.json")
      .then(response => {
        let values = Object.values(response.data);
        let keys = Object.keys(response.data);

        keys.forEach((key, idx) => {
          values[idx] = {
            ...values[idx],
            id: key
          }
        });

        this.setState({isLoading: false, notes: values});
      })
      .catch(response => console.log(response));
  }

  state = {
    notes: [],
    showAddNoteModal: false,
    isLoading: false
  };

  addNewNote = (note) => {
    const notes = {
      title: note.title,
      details: note.details,
      rating: note.rating
    };

    const updatedNotes = this.state.notes.slice();
    updatedNotes.push({...notes});

    this.setState({isLoading: true, notes: updatedNotes});

    axios.post("/notes.json", notes)
      .then(_ => this.setState({isLoading: false, })) // Add new note to state
      .catch(response => console.log(response));

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
    let noteSummary = <Spinner />;

    if(notes.length === 0) {
      notes = <p>Start adding notes!</p>
    }
    else {
      notes = notes.map((note, idx) => {
        return (
          <Col className="card" xs={3} xsPush={1} key={idx}>
            <Note key={idx} note={note} />
          </Col>)
      })
    }

    if(!this.state.isLoading) {
      noteSummary = (
        <Grid>
          <Row className="show-grid">
            {notes}
          </Row>
        </Grid>
      );
    }

    return (
      <Fragment>
        <Button style={{marginBottom: "20px", marginTop: "55px"}} bsStyle="primary" onClick={this.showModal}>Add note</Button>
        <AddNote showModal={this.state.showAddNoteModal} closeModal={this.hideModal} addNote={this.addNewNote}/>
        {noteSummary}
      </Fragment>
    );
  }
}
