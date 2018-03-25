import React, {Component, Fragment} from "react";
import Note from "../../components/Note/Note";

class NotesPage extends Component {
  state = {
    notes: [
      {title: "Peak", details: "Great book!", rating: 5},
      {title: "Code Complete", details: "Good programming resource."}
    ]
  };

  addNewNote = (note) => {
    const notes = this.state.notes.slice();

    notes.push(note);

    this.setState({notes: notes});
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
        <button className="btn btn-lg btn-info" onClick={() => this.addNewNote({title: "title", details: "details"})}>Add Note</button>
        {notes}
      </Fragment>
    );
  }
}

export default NotesPage;