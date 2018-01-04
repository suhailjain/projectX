import React, { Component } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import ImageItem from './ImageItem';

class ImageList extends Component {
  constructor() {
    super();
    this.state = { datalist: [] };
  }
  componentWillMount() {
    axios.get(this.props.url).then(response => {
      this.setState({
        datalist: response.data
      });
      console.log(response.data);
    });
  }
  render() {
    console.log(this.props.url);
    return (
      <FlatList
        data={this.state.datalist}
        renderItem={({ item }) => <ImageItem pic={item} />}
        //extraData={this.state}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.postsDB
  };
};

export default connect(mapStateToProps)(ImageList);
