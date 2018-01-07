import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { query } from 'firebase';
import ImageItem from './ImageItem';
import fbAccess from '../FirebaseConfig';

class ImageList extends Component {
  constructor() {
    super();
    this.state = { datalist: [] };
  }
  componentWillMount() {
    const fbdb = fbAccess.database();
    console.log(this.props.dbref);
    let pics = [];
    let i = 0;
    fbdb.ref(this.props.dbref).orderByChild('likes')
    .on("child_added", (snapshot) => {
      //reversing the like order
      pics.unshift(snapshot.val());
      this.setState({
        datalist: pics
      });
    });

    //temp = fbdb.ref(this.props.dbref).orderByChild('likes');
    //console.log(temp);
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
    url: state.postsDB,
    dbref: state.dbRef
  };
};

export default connect(mapStateToProps)(ImageList);
