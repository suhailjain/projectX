import React, { Component } from 'react';
import { View } from 'react-native';
import Button from './Button';

class UploadCard extends Component {
  render() {
    const { container, upload, retry } = styles;
    return (
      <View>
        <View style={container}>
          <Button onPress={() => console.log('upload')} style={upload} >
            upload
          </Button>
        </View>
        <View>
          <Button onPress={() => console.log('upload')} style={retry} >
            Retry
          </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    height: 40,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  upload: {
    flexDirection: 'row'
  },
  retry: {
    flexDirection: 'row'
  }
};

export default UploadCard;
