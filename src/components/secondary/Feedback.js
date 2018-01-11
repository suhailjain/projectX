import React, { Component } from 'react';
import { Text, View, Picker, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Header from '../common/Header';
import * as actions from '../../actions';
import DrawerModal from '../common/DrawerModal';
import Button from '../common/Button';
import fbAccess from '../FirebaseConfig';

const submit = (service, comment) => {
    console.log('submit');
    const user = fbAccess.auth().currentUser.uid;
    fbAccess.database().ref(`/feedback/service/${service}`).child(`${user}`)
    .set(comment)
    .then(() => {
    Alert.alert('appreciate your efforts to make us better');
  }).then(() => Actions.pop());
};

class Feedback extends Component {
  constructor() {
    super();
    this.state = { service: 'Washroom', comment: '' };
  }
  update = (selected) => {
      this.setState({ service: selected });
  }
  comment = (text) => {
    this.setState({ comment: text });
  }

  render() {
    return (
      <View>
      <Header headerText={'Feed us Back'} onPress={() => this.props.drawerState(false)} />
      <Text>What is it about</Text>
      <Picker selectedValue={this.state.service} onValueChange={this.update}>
               <Picker.Item label="Washroom" value="Washroom" />
               <Picker.Item label="Parking" value="Parking" />
               <Picker.Item label="Lift" value="Lift" />
               <Picker.Item label="Store" value="Store" />
               <Picker.Item label="Suggestion" value="Suggestion" />
      </Picker>
      <Text>anddd...</Text>
      <TextInput
           underlineColorAndroid="transparent"
           placeholder="Email"
           placeholderTextColor="#9a73ef"
           autoCapitalize="none"
           onChangeText={this.comment}
      />
      <Button onPress={() => submit(this.state.service, this.state.comment)}>
      send it across
      </Button>
        <DrawerModal />
      </View>
    );
  }
}

export default connect(null, actions)(Feedback);
