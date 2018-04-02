import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import notesReducer from "./store/reducers/noteReducer";
import thunk from "redux-thunk";
import authenticationReducer from "./store/reducers/authenticationReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  notes: notesReducer,
  auth: authenticationReducer
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App/></Provider>,
  document.getElementById('root'));

registerServiceWorker();
