import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Header from '../common/Header';
import MovieList from './MovieList';
import * as actions from '../../actions';

class Cinepolis extends Component {
    render() {
      return (
        <View>
        <Header headerText={'Now  Showing'} onPress={() => this.props.drawerState(false)} />
        <MovieList />
        </View>
      );
    }
}

export default connect(null, actions)(Cinepolis);
