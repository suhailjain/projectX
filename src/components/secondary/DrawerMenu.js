import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../common/Button';
import About from '../secondary/Aboutus';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 100,
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

const DrawerMenu = () => {
  return (
    <View style={styles.container}>
      <Button onPress={() => Actions.lobby()} >
        Home
      </Button>
      <Button onPress={() => Actions.movie()} >
        Unity Clip
      </Button>
      <Button onPress={() => Actions.feedback()} >
        Feedbacks
      </Button>
      <Button onPress={() => Actions.survey()} >
        Surveys
      </Button>
      <Button onPress={() => Actions.gallery()} >
        Gallery
      </Button>
      <Button onPress={() => Actions.connect()} >
        Connect
      </Button>
      <Button onPress={() => Actions.about()} >
        About Us
      </Button>
    </View>
  );
};

export default DrawerMenu;
