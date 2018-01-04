import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from '../common/Button';

const Store = (props) => {
  console.log('hi');
  console.log(props.store);
  return (
    <View>
    <TouchableOpacity>
    <Text>{props.store.brand}</Text>
    </TouchableOpacity>
    </View>
  );
};

export default Store;
