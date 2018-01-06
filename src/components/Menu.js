import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';
import Button from './common/Button';

class Menu extends Component {
  render() {
  return (
    <View>

    <Button onPress={() => {
    this.props.purpose('shopping');
      Actions.storelist();
    }}>
    Shopping
    </Button>

    <Button onPress={() => {
    this.props.purpose('food');
      Actions.storelist();
    }}>
    Food
    </Button>

    <Button onPress={() => {
      Actions.cinepolis();
    }}>
    Cinepolis
    </Button>
    </View>
  );
}
}

export default connect(null, actions)(Menu);
