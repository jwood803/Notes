import React, { Component } from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {NotesPage} from "./containers/NotesPage/NotesPage";
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Route path="/" exact render={() => <NotesPage/>}/>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
