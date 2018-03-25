import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from "./components/Layout/Layout";
import NotesPage from "./containers/NotesPage/NotesPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <NotesPage/>
        </Layout>
      </div>
    );
  }
}

export default App;
