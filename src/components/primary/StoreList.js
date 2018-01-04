import React, { Component } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
import Store from './Store';

class StoreList extends Component {
  constructor() {
    super();
    this.state = { storelist: [] };
  }
  componentWillMount() {
    axios.get('https://unityone-65a80.firebaseio.com/stores.json').then(response => {
      this.setState({
        storelist: response.data
      });
      console.log(response.data);
    });
  }
  render() {
    return (
      <FlatList
        data={this.state.storelist}
        renderItem={({ item }) => <Store store={item} />}
      />
    );
  }
}

export default StoreList;
