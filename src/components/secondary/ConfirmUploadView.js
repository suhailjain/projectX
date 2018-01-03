import React from 'react';
import { Image, Text, View } from 'react-native';
import UploadCard from '../common/UploadCard';

const ConfirmUploadView = (props) => {
    //console.log(this.prop.pic);
    console.log(props.pic.node.image.uri);
    //console.log(this.prop.pic.node.image.uri);
    return (
      <View>
      <Text>confirm</Text>
      <Image
        style={{ width: 300,
        height: 300 }}
        source={{ uri: props.pic.node.image.uri }}
      />
      <UploadCard />
      </View>
    );
};
//source={{ uri: props.pic.node.image.uri }}
export default ConfirmUploadView;
