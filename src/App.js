import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Note from "./Note/Note";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Note title="Note title" details="Note details"/>
      </div>
    );
  }
}

export default App;
