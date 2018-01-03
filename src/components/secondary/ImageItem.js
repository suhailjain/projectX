import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../common/Button';

const likeHandle = () => {
  console.log('hi');
};

const ImageItem = (props) => {
    return (
      <View>
      <Image
        style={{ width: 300,
        height: 300 }}
        source={{ uri: props.pic.url }}
      />
      <Text>
      {props.pic.title}
      </Text>
      <Button onPress={() => likeHandle()} >
      like
      </Button>
      </View>
    );
};

export default ImageItem;
