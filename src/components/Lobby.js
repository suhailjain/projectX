import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './common/Header';
import Menu from './Menu';
import DrawerModal from './common/DrawerModal';

class Lobby extends Component {
  render() {
    return (
        <View>
          <Header headerText={this.props.locate} onPress={() => this.props.drawerState(false)} />
        <Menu location={this.props.locate} />
        <DrawerModal visible={this.props.toggle} />
        </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    locate: state.currentLocation,
    toggle: state.drawerState
  };
};

export default connect(mapStateToProps, actions)(Lobby);
