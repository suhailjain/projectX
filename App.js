
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PickLocation from './src/components/PickLocation';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  render() {
      return (
        <Provider store={createStore(reducers)}>
          <Router />
        </Provider>
    );
  }
}

export default App;
