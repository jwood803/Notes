import React, { Component } from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {NotesPage} from "./containers/NotesPage/NotesPage";
import {NoteDetails} from "./components/NoteDetails/NoteDetails";
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Route path="/" exact component={NotesPage}/>
            <Route path="/notes/:id" exact component={NoteDetails} />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
