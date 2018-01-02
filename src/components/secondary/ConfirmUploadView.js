import React from 'react';
import { Image, Text, View } from 'react-native';

const ConfirmUploadView = (props) => {
    //console.log(this.prop.pic);
    console.log(props.pic.node.image.uri);
    //console.log(this.prop.pic.node.image.uri);
    return (
      <View>
      <Text>confirm</Text>
      <Image
        style={{ flex: 1 }}
        source={{ uri: props.pic.node.image.uri }}
      />
      </View>
    );
};

export default ConfirmUploadView;
