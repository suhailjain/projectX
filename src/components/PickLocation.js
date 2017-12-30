import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer'
import * as actions from '../actions';
import Button from './common/Button';
import Header from './common/Header';

class PickLocation extends Component {
  render() {
    return (
        <View>
        <Header headerText={'Where can i take you today?'} />
        <Button onPress={() => {
          this.props.selectLocation('Rohini');
          Actions.lobby();
        }}>Rohini
        </Button>
        <Button onPress={() => {
          this.props.selectLocation('Janakpuri');
          Actions.lobby();
        }}>Janakpuri
        </Button>
        <Button onPress={() => {
          this.props.selectLocation('Shahadra');
          Actions.lobby();
        }}>
          Shahadra
        </Button>
        </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    locate: state.currentLocation
  };
};

export default connect(mapStateToProps, actions)(PickLocation);
