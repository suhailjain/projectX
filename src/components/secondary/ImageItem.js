import React, { Component } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import Button from '../common/Button';
import fbAccess from '../FirebaseConfig';

const likeHandle = (url, id, likes) => {
  console.log(url);
  console.log(likes);
  console.log(id);
    const db = fbAccess.database();
    db.ref(`${url}`).child(id).update({ likes: likes + 1 })
    .then(() => {
      Alert.alert('your like was counted');
    })
    .catch(() => Alert.alert('fishh!, please try again.'));
};

class ImageItem extends Component {
  render() {
    console.log(this.props.pic);
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
