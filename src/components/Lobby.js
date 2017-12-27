import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Header from './Header';

class Lobby extends Component {
  render() {
    return (
      <View>
        <Header headerText={'hi'} />
        <Text>congrats</Text>
      </View>
    );
  }
}

export default connect()(Lobby);
