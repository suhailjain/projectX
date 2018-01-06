import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';
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
    });
  }
  render() {
    return (
      <ScrollView>
      <FlatList
        data={this.state.datalist}
        renderItem={({ item }) => <ImageItem pic={item} />}
        //extraData={this.state}
      />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.postsDB
  };
};

export default connect(mapStateToProps)(ImageList);
