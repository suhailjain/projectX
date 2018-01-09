import React, { Component } from 'react';
import { View, FlatList, ScrollView, List, Image, Text } from 'react-native';

class MovieItem extends Component {
  render() {
    console.log(this.props.movie.url);
    return (
      <View>
      <Image
      style={{ width: 150, height: 150 }}
      source={{ uri: this.props.movie.url }}
      />
      <Text>{this.props.movie.name}</Text>
      </View>
    );
  }
}

export default MovieItem;
