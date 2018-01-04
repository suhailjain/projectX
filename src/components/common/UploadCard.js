import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import RNFetchBlob from 'react-native-fetch-blob';
import axios from 'axios';
import { connect } from 'react-redux';
import Button from './Button';
import fbAccess from '../FirebaseConfig';

const storage = fbAccess.storage();
const db = fbAccess.database();
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

const uploadImage = (uri, key, location, mime = 'application/octet-stream') => {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    console.log(uri);
    const sessionId = new Date().getTime();
    let uploadBlob = null;
    const imageRef = storage.ref(location).child(`${sessionId}`);
    console.log('start');
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
        db.ref('/posts').child(key).set({ url: url, likes: 0 });
        db.ref('/IndexKeys').set({ posts: key + 1 });
        Actions.gallery();
        //increment the key;
        })
      .catch((error) => {
        reject(error);
    });
  });
};

class UploadCard extends Component {
  constructor() {
    super();
    this.state = { key: -1 };
  }
  componentWillMount() {
    axios.get('https://unityone-65a80.firebaseio.com/IndexKeys.json').then(response => {
      this.setState({
        key: response.data.posts
      });
    //  console.log(response.data);
    });
  }
  render() {
    //location is working fine
    console.log(this.props.dbref);
    const { container, upload, retry } = styles;
    return (
      <View>
        <View style={container}>
          <Button onPress={() => uploadImage(this.props.uri, this.state.key, this.props.locate)} style={upload} >
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

const mapStateToProps = state => {
  return {
    locate: state.currentLocation,
    dbref: state.dbRef
  };
};

export default connect(mapStateToProps)(UploadCard);
