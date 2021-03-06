import React, { Component } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import Store from './Store';

class StoreList extends Component {
  constructor() {
    super();
    this.state = { storelist: [] };
  }
  componentWillMount() {
    let url = 0;
    if (this.props.purpose === 'shopping') {
      url = this.props.storeurl;
    } else {
      url = this.props.foodurl;
    }
    axios.get(url).then(response => {
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

const mapStateToProps = state => {
  return {
    storeurl: state.storeDB,
    purpose: state.purpose,
    foodurl: state.foodDB
  };
};

export default connect(mapStateToProps)(StoreList);
