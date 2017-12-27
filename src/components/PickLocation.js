import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Button from './Button';
import Header from './Header';

class PickLocation extends Component {
  render() {
    console.log(this.props.locate);
    return (
        <View>
        <Header headerText={'Where can i take you today?'} />
        <Button
          onPress={() => {
          this.props.selectLocation('Rohini');
          console.log('wwoow');
          console.log('kya baaat hai');
        }}
        >

          Rohini
        </Button>
        <Button onPress={() => this.props.selectLocation('Janakpuri')}>
          Janakpuri
        </Button>
        <Button onPress={() => this.props.selectLocation('Shahadra')}>
          Shahadra
        </Button>
        </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    locate: state.lobby
  };
};

export default connect(mapStateToProps, actions)(PickLocation);
