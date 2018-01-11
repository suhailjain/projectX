import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import * as actions from '../../actions';

class MovieItem extends Component {
  render() {
    console.log(this.props.movie.url);
    return (
      <View>
      <TouchableOpacity onPress={() => {
        this.props.currentImageVisible(false);
      }}>
      <Image
      style={{ width: 150, height: 150 }}
      source={{ uri: this.props.movie.url }}
      />
      </TouchableOpacity>
      <Text>{this.props.movie.name}</Text>
      <Modal
      onBackdropPress={() => this.props.currentImageVisible(false)}
      isVisible={this.props.visible} >
      <Text>{this.props.movie.name}</Text>
      </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    visible: state.visible
  };
};

export default connect(mapStateToProps, actions)(MovieItem);
