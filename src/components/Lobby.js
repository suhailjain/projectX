import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';

class Lobby extends Component {
  render() {
    return (
      <View>
        <Header headerText={this.props.locate} />
        <Text>congrats</Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    locate: state.currentLocation
  };
};

export default connect(mapStateToProps, actions)(Lobby);
