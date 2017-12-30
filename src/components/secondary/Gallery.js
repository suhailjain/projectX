import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Header from '../common/Header';
import Button from '../common/Button';

class Gallery extends Component {
  render() {
    return (
      <View>
      <Header headerText={'photos${this.props.location}'} />
      <Text>
      Gallery
      </Text>
      <Button onPress={() => Actions.camera()} >
      click
      </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});

const mapStateToProps = state => {
  return {
    locate: state.currentLocation
  };
};

export default connect(mapStateToProps)(Gallery);
