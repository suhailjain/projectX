import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../common/Button';

const ImageItem = (props) => {
    return (
      <View>
      <View>
        <Text>{props.pic.name}</Text>
      </View>
      <View>
        <Text>{props.pic.name}</Text>
      </View>
      </View>
    );
};

export default ImageItem;
