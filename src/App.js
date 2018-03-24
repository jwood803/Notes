import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Note from "./Note/Note";

class App extends Component {
  state = {
    notes: [
      {title: "Peak", details: "Great book!"},
      {title: "Code Complete", details: "Nice resource."}
    ]
  };

  render() {
    let clickHandler = () => {
      let notes = [...this.state.notes];

      this.setState({
        notes: [
          ...notes,
          {title: "New title", details: "More details."}
        ]
      })
    };

    return (
      <div className="App">
        {
          this.state.notes.map((note, idx) => {
            return <Note key={idx} title={note.title} details={note.details} addNote={clickHandler} />
          })
        }
      </div>
    );
  }
}

export default App;
