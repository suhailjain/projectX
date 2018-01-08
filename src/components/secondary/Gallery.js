import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Header from '../common/Header';
import Button from '../common/Button';
import ImageList from './ImageList';
import fbAccess from '../FirebaseConfig';

const clickMe = () => {
  const user = fbAccess.auth().currentUser;
  if (user === null) {
    Alert.alert('you must log in to upload yours');
  } else {
    Actions.camera();
  }
};

class Gallery extends Component {

  render() {
    return (
      <View>
      <Header headerText={'Selfie Point'} />
      <Text>
      Gallery
      </Text>
      <Button onPress={() => clickMe()} >
      click
      </Button>
      <ImageList />
      <View style={{ height: 50, paddingBottom: 50, backgroundColor: 'blue' }} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    locate: state.currentLocation
  };
};

export default connect(mapStateToProps)(Gallery);
