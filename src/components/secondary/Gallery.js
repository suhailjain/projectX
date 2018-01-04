import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Header from '../common/Header';
import Button from '../common/Button';
import ImageList from './ImageList';

class Gallery extends Component {
  render() {
    return (
      <View>
      <Header headerText={'Selfie Point'} />
      <Text>
      Gallery
      </Text>
      <Button onPress={() => Actions.camera()} >
      click
      </Button>
      <ImageList />
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
