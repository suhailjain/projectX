import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer'
import * as actions from '../actions';
import Button from './common/Button';
import Header from './common/Header';
import DrawerModal from './common/DrawerModal';

class PickLocation extends Component {
  render() {
    return (
        <View>
        <StatusBar barStyle = "dark-content" hidden = {true}/>
        <Header headerText={'Where can i take you today?'} />
        <Button onPress={() => {
          this.props.selectLocation('Rohini');
          this.props.postUrl('https://unityone-65a80.firebaseio.com/posts.json');
          this.props.likeUrl('https://unityone-65a80.firebaseio.com/posts');
          this.props.storeUrl('https://unityone-65a80.firebaseio.com/rohiniShop.json');
          this.props.foodUrl('https://unityone-65a80.firebaseio.com/rohiniFood.json');
          this.props.dbRef('/posts');
          Actions.lobby();
        }}>Rohini
        </Button>
        <Button onPress={() => {
          this.props.selectLocation('Janakpuri');
          this.props.postUrl('https://unityone-65a80.firebaseio.com/jPosts.json');
          this.props.likeUrl('https://unityone-65a80.firebaseio.com/jPosts');
          this.props.storeUrl('https://unityone-65a80.firebaseio.com/janakpuriShop.json');
          this.props.foodUrl('https://unityone-65a80.firebaseio.com/janakpuriFood.json');
          this.props.dbRef('/jPosts');
          Actions.lobby();
        }}>Janakpuri
        </Button>
        <Button onPress={() => {
          this.props.selectLocation('Shahadra');
          this.props.postUrl('https://unityone-65a80.firebaseio.com/sPosts.json');
          this.props.likeUrl('https://unityone-65a80.firebaseio.com/sPosts');
          this.props.storeUrl('https://unityone-65a80.firebaseio.com/shahdraShop.json');
          this.props.foodUrl('https://unityone-65a80.firebaseio.com/shahdraFood.json');
          this.props.dbRef('/sPosts');
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
