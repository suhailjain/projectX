import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../common/Button';

const Menu = () => {
  return (
    <View>
    <Button onPress={() => Actions.storelist()}>
    Shopping
    </Button>
    </View>
  );
};

export default Menu;
