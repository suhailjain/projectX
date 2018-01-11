import { Text, View } from 'react-native';
import React, { Component } from 'react';
import Header from '../common/Header';
import DrawerModal from '../common/DrawerModal';

export default class Aboutus extends Component {
  render() {
    return (
      <View>
        <Header headerText={'hi'} onPress={() => this.props.drawerState(false)} />

          <DrawerModal />
        <Text>about us</Text>
      </View>
    );
  }
}
