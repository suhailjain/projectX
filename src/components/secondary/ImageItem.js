import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../common/Button';

const ImageItem = (props) => {
    return (
      <View>
      <View>
        <Text>{props.pic.title}</Text>
      </View>
      <View>
        <Text>{props.pic.id}</Text>
      </View>
      </View>
    );
};

export default ImageItem;
