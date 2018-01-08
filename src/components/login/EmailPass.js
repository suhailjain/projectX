import React, { Component } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import Button from '../common/Button';
import * as actions from '../../actions';

class EmailPass extends Component {
  constructor() {
    super();
    this.state = { email: '', password: '', error: '' };
  }
  handleEmail = (text) => {
    this.setState({ email: text });
  }
  handlePassword = (text) => {
    this.setState({ password: text });
    console.log(text);
  }
  login = (email, pass) => {
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(() => Alert.alert('you have loggedin successfuly'))
    .then(() => {
      //after sign in
      Actions.lobby();
    })
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then(() => Alert.alert('you have signedup successfuly!'))
      .then(() => {
        // message of signing up
        Actions.lobby();
      })
      .catch(() => {
        Alert.alert('something went wrong');
      });
    });
  }
  render() {
    return (
      <View style={{ paddingTop: 50 }}>
        <View>
        <TextInput
             underlineColorAndroid="transparent"
             placeholder="Email"
             placeholderTextColor="#9a73ef"
             autoCapitalize="none"
             onChangeText={this.handleEmail} />
        </View>
        <View>
        <TextInput
             underlineColorAndroid="transparent"
             placeholder="Password"
             placeholderTextColor="#9a73ef"
             autoCapitalize="none"
             onChangeText={this.handlePassword} />
        <Button onPress={() => this.login(this.state.email, this.state.password)} >
        Submit
        </Button>
        <Text>
        {this.state.error};
        </Text>
        </View>
      </View>
    );
  }
}

export default connect(null, actions)(EmailPass);
