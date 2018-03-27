import React, { Component } from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {NotesPage} from "./containers/NotesPage/NotesPage";
import {NoteDetails} from "./components/NoteDetails/NoteDetails";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {EditNote} from "./components/EditNote/EditNote";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route path="/" exact component={NotesPage}/>
              <Route path="/notes/:id/edit" exact component={EditNote} />
              <Route path="/notes/:id" exact component={NoteDetails} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
