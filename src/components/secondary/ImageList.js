import React, { Component } from 'react';
import { Text, ListView } from 'react-native';
import ImageItem from './ImageItem';

const data = [{
  name: 'waaah'
}, {
  name: 'waaah'
}];

export default class ImageList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }
  render() {
    return (
      <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <ImageItem pic={rowData} />}
      />
    );
  }
}
