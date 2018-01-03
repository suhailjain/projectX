import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import RNFetchBlob from 'react-native-fetch-blob';
import Button from './Button';
import fbAccess from '../FirebaseConfig';

const storage = fbAccess.storage();
const db = fbAccess.database();
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

const uploadImage = (uri, mime = 'application/octet-stream') => {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    console.log(uri);
    const sessionId = new Date().getTime();
    let uploadBlob = null;
    const imageRef = storage.ref('images').child(`${sessionId}`);
    console.log('start');
    const file = `${sessionId}`;
    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` });
      })
      .then((blob) => {
        uploadBlob = blob;
        return imageRef.put(blob, { contentType: mime });
      })
      .then(() => {
        uploadBlob.close();
        console.log('end');
        return imageRef.getDownloadURL();
      })
      .then((url) => {
        resolve(url);
        console.log(url);
        const y = 'y';
        const date = '03-03-03';
        const key = 2;
        const likes = 33;
        const location = 'Janakpuri';
        const title = 'title';

        db.ref('/posts').push({ y, date, key, likes, location, title, url });
        })
      .catch((error) => {
        reject(error);
    });
  });
};

class UploadCard extends Component {
  render() {
    const { container, upload, retry } = styles;
    return (
      <View>
        <View style={container}>
          <Button onPress={() => uploadImage(this.props.uri)} style={upload} >
            upload
          </Button>
        </View>
        <View>
          <Button onPress={() => Actions.camera()} style={retry} >
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
