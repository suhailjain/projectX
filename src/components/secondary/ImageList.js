import React, { Component } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
import ImageItem from './ImageItem';

export default class ImageList extends Component {
  constructor() {
    super();
    this.state = { datalist: [] };
  }
  componentWillMount() {
    axios.get('https://unityone-65a80.firebaseio.com/posts.json').then(response => {
      this.setState({
        datalist: response.data
      });
      console.log(response.data);
    });
  }
  render() {
    console.log(this.state.datalist);
    return (
      <FlatList
        data={this.state.datalist}
        renderItem={({ item }) => <ImageItem pic={item} />}
        //extraData={this.state}
      />
    );
  }
}
