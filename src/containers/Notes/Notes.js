import React, {Component, Fragment} from "react";
import Note from "../../components/Note/Note";
import {AddNote} from "../../components/Modals/AddNote/AddNote";
import {Grid, Row, Col, Button} from "react-bootstrap";
import "./NotesPage.css";
import Spinner from "../../UI/Spinner/Spinner";
import {connect} from "react-redux";
import {
  getNotes,
  addNote,
  addNoteToStore
} from "../../store/actions/notesAction";

class Notes extends Component {
  componentDidMount() {
    this.props.onGetNotes(this.props.token);
  }

  state = {
    showAddNoteModal: false,
  };

  addNewNote = (note) => {
    this.props.onAddNewNote(note, this.props.token);
    this.props.addNoteToNotes(note);

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
    let notes = (this.props.notes || []).slice();
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

    if(!this.props.isLoading) {
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
        <Button className="align-button" bsStyle="primary" onClick={this.showModal}>Add note</Button>
        <AddNote showModal={this.state.showAddNoteModal} closeModal={this.hideModal} addNote={this.addNewNote}/>
        {noteSummary}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.notes,
    error: state.notes.error,
    isLoading: state.notes.isLoading,
    token: state.auth.token
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetNotes: token => dispatch(getNotes(token)),
    onAddNewNote: (note, token) => dispatch(addNote(note, token)),
    addNoteToNotes: note => dispatch(addNoteToStore(note)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
