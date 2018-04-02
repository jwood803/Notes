import React, { Component } from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import Notes from "./containers/Notes/Notes";
import NoteDetails from "./components/NoteDetails/NoteDetails";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Authentication from "./containers/Authentication/Authentication";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route path="/notes/:id" exact component={NoteDetails} />
              <Route path="/signup" exact component={Authentication} />
              <Route path="/" exact component={Notes}/>
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
