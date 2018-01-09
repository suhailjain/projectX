import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Button from '../common/Button';
import fbAccess from '../FirebaseConfig';
import * as actions from '../../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const loginCheck = () => {
  if (fbAccess.auth().currentUser === null) {
  return false;
  } else {
    return true;
  }
};

const DrawerMenu = (props) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => {
        props.drawerState(true);
        Actions.lobby();
      }}>
        Home
      </Button>
      <Button onPress={() => {
        props.drawerState(true);
        Actions.movie();
      }}>
        Unity Clip
      </Button>
      <Button onPress={() => {
    //    props.drawerState(true);
        if (loginCheck()) {
        Actions.feedback();
      } else {
        Alert.alert('login is must');
      }
      }}>
        Feedbacks
      </Button>
      <Button onPress={() => {
        //    props.drawerState(true);
          if (loginCheck()) {
          Actions.feedback();
        } else {
          Alert.alert('login is must');
        }
      }}>
        Surveys
      </Button>
      <Button onPress={() => {
        props.drawerState(true);
        Actions.gallery();
      }}>
        Gallery
      </Button>
      <Button onPress={() => {
        props.drawerState(true);
        Actions.connect();
      }}>
        Connect
      </Button>
      <Button onPress={() => {
        props.drawerState(true);
        Actions.about();
      }}>
        About Us
      </Button>
      <Button onPress={props.onPress} >
      closeDrawer
      </Button>
    </View>
  );
};

export default connect(null, actions)(DrawerMenu);
