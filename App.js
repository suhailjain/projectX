
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBqDZp6QmjzvEa5MCBu1ZxLWpQwkRxNXsM',
    authDomain: 'unityone-65a80.firebaseapp.com',
    databaseURL: 'https://unityone-65a80.firebaseio.com',
    projectId: 'unityone-65a80',
    storageBucket: 'unityone-65a80.appspot.com',
    messagingSenderId: '452199736775'
  });
  }
  render() {
      return (
        <Provider store={createStore(reducers)}>
          <Router />
        </Provider>
    );
  }
}

export default App;
