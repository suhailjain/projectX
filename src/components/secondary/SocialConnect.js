import { Text, View } from 'react-native';
import React, { Component } from 'react';
import EmailPass from '../login/EmailPass';
import Header from '../common/Header';
import * as actions from '../../actions';
import DrawerModal from '../common/DrawerModal';

export default class SocialConnect extends Component {
  render() {
    return (
      <View style={{ paddingTop: 20 }}>
      <Header headerText={'hi'} onPress={() => this.props.drawerState(false)} />

        <DrawerModal />
        <EmailPass />
      </View>
    );
  }
}
