import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer'
import * as actions from '../actions';
import Header from './common/Header';
import DrawerMenu from './secondary/DrawerMenu';
import Menu from './primary/Menu';

class Lobby extends Component {
  state={
    drawerOpen: false,
    drawerDisabled: false,
  };
  closeControlPanel = () => {
   this._drawer.close()
 };
 openControlPanel = () => {
   this._drawer.open()
 };
  render() {
    //add a fancy drawer pull/push button
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={
          <DrawerMenu closeDrawer={this.closeControlPanel} />
        }
        acceptDoubleTap
        styles={{ main: { shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15 } }}
        onOpen={() => {
          console.log('onopen')
          this.setState({ drawerOpen: true })
        }}
        onClose={() => {
          console.log('onclose')
          this.setState({ drawerOpen: false })
        }}
        captureGestures={false}
        tweenDuration={100}
        panThreshold={0.08}
        disabled={this.state.drawerDisabled}
        panOpenMask={0.3}
        negotiatePan
        >
        <View style={{ backgroundColor: 'blue', flex: 1 }}>
          <Header headerText={this.props.locate} />
        <Menu />
        </View>
      </Drawer>
    );
  }
}

const mapStateToProps = state => {
  return {
    locate: state.currentLocation
  };
};

export default connect(mapStateToProps, actions)(Lobby);
