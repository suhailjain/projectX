import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import * as actions from '../../actions';
import DrawerMenu from '../secondary/DrawerMenu';

const { width, height } = Dimensions.get('window');

class DrawerModal extends Component {

  render() {
    return (
      <View>
      <Modal
      isVisible={this.props.visible}
      style={styles.drawerContainer}
      animationIn={'slideInLeft'}
      animationOut={'slideOutLeft'}
      onBackdropPress={() => this.props.drawerState(true)}
      >
        <DrawerMenu onPress={() => this.props.drawerState(true)} />
      </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerContainer: {
    marginTop: height / 11,
    marginLeft: 0,
    borderWidth: 2,
    borderColor: '#000000',
    marginRight: '35%'
  }
});

export default connect(null, actions)(DrawerModal);
