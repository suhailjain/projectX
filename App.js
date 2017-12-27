
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PickLocation from './src/components/PickLocation';
import reducers from './src/reducers';

class App extends Component {
  render() {
      return (
        <Provider store={createStore(reducers)}>
          <View>
            <PickLocation />
          </View>
        </Provider>
    );
  }
}

export default App;
