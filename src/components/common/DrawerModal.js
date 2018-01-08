import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import * as actions from '../../actions';
import DrawerMenu from '../secondary/DrawerMenu';

class DrawerModal extends Component {
  render() {
    return (
      <View>
      <Modal isVisible={this.props.visible}>
        <DrawerMenu onPress={() => this.props.drawerState(true)} />
      </Modal>
      </View>
    );
  }
}

export default connect(null, actions)(DrawerModal);
