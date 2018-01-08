import React, { Component } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import Button from '../common/Button';
import fbAccess from '../FirebaseConfig';

const likeHandle = (url, id, likes) => {
    const user = fbAccess.auth().currentUser;
    if (user === null) {
      Alert.alert('you must log in to like');
    } else {
    const db = fbAccess.database();
    const uid = user.uid;
    const uniqueKey = url + id;
    db.ref(`/hypeUsers/users/${uid}/${uniqueKey}`).once('value').then((snapshot) => {
      if (snapshot.val()) {
          Alert.alert('you have liked this before, thanks!');
      } else {
        //user has not liked this image before

        db.ref(`${url}`).child(id).update({ likes: likes + 1 })

        .then(() => {
          db.ref(`/hypeUsers/users/${uid}/`).child(uniqueKey).set(true)
            .then(() => {
              Alert.alert('your like was counted');
            });
        });
    }
  })
    .catch(() => Alert.alert('fishh!, please try again.'));
  }
};

class ImageItem extends Component {
  render() {
    return (
      <View>
      <Image
        style={{ width: 300,
        height: 300 }}
        source={{ uri: this.props.pic.url }}
      />
      <Text>
      {this.props.pic.title}
      </Text>
      <Button onPress={() => likeHandle(this.props.dbref, this.props.pic.id, this.props.pic.likes)} >
      like {this.props.pic.likes}
      </Button>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    dbref: state.dbRef
  };
};

export default connect(mapStateToProps)(ImageItem);
