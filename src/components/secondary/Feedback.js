import React,{ Component } from 'react';
import { Text, View } from 'react-native';
import Header from '../common/Header';
import DrawerModal from '../common/DrawerModal';

class Feedback extends Component {
  render() {
    return (
      <View>
        <Header headerText={'hi'} />
        <Text>
            feedback page!!!
        </Text>
      </View>
    );
  }
}

export default Feedback;
